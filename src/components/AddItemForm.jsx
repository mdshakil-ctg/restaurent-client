import SectionTitle from "../Pages/Shared/SectionTitle/SectionTitle";
import { ImSpoonKnife } from "react-icons/im";
import { useForm } from "react-hook-form"
import { useState } from "react";
import axios from "axios";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useModal from "../Hooks/useModal";

const AddItemForm = () => {
const {openModal} = useModal();
const [selectedImage, setSelectedImage] = useState(null);
const [loading, setLoading] = useState(false)
const [nameImage, setNameImage] = useState(null);
const imageApi = import.meta.env.VITE_IMAGEBB_API;
const image_hosting_api= `https://api.imgbb.com/1/upload?key=${imageApi}`
const axiosSecure = useAxiosSecure();


const handleFileChange = (event) =>{
    const file = event.target.files[0];
    setNameImage(event.target.files[0].name)
    
    if(file){
        setSelectedImage(file)
    }
}

const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const handleFormSubmit = async(data) => {
    setLoading(true)
   
    if(!selectedImage){
        setLoading(false);
        return openModal({
          message: 'Please select an image first',
          autoCloseTime: 2000
        })
    }

    const formData = new FormData();
    formData.append('image',selectedImage);

      const result = await axios.post(image_hosting_api, formData,{
          headers:{
            'Content-Type': 'multipart/form-data',
            }
        })

        const itemInfo = {
            name: data.name,
            recipe: data.recipe,
            image: result?.data?.data?.display_url,
            category: data.category,
            price: data.price
        }

        console.log('image upload result',result.data);
        if(result.data.success){
            //make api call to save item in the database
            const result = await axiosSecure.post('/add-item', itemInfo)
            console.log(result.data.insertedId);
            if(result?.data?.insertedId){
              openModal({
                title: "Success",
                message: "Item has been added successfully",
                autoCloseTime: 2000
              })
              setLoading(false)
              setSelectedImage(null)
              reset();
            }
        }else{
          reset()
          setLoading(false)
        }
}


  
  return (
    <div className="flex ">
      <div className="min-h-screen w-full max-w-4xl bg-[#1C1C1C] text-white p-16 pt-0">
        {/* Form Title */}
        {errors && <span className="text-red-500">{errors.message}</span>}
        <div className="text-white">
          <SectionTitle
            title="add an item"
            subTitle="what's new"
          ></SectionTitle>
        </div>

        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="flex flex-col mb-2">
            {errors.name ? 
            <label htmlFor="name" className="text-red-500 mb-2">
            Name is required
          </label>
            :
            <label htmlFor="name" className="text-gray-300 mb-2">
              Recipe Name
            </label>
            }
            <input
            {...register("name", { required: 'Name is required' })}
              type="text"
              id="name"
              className="px-4 py-2 bg-slate-800 text-white placeholder:text-white  border border-gray-600 rounded-md focus:outline-none focus:border-yellow-500"
              placeholder="Food title here"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2">
            <div className="flex flex-col">
              <label htmlFor="category" className="text-gray-300 mb-4">
                Category
              </label>
              <select
              {...register("category", { required: "Category is required" })}
                id="category"
                className="px-4 py-[13px] bg-slate-800 text-white border border-gray-600 rounded-t-md focus:outline-none focus:rounded-t-md focus:text-black focus:border-yellow-500"
              >
                <option  value="salad">
                  Salad
                </option>
                <option  value="option1">
                  Pizza
                </option>
                <option  value="soup">
                  Soup
                </option>
                <option  value="dessert">
                  Dessert
                </option>
                <option  value="drinks">
                  Drinks
                </option>
              </select>
            </div>
            <div className="flex flex-col">
              {
                errors.price ? 
              <label htmlFor="price" className="text-red-500 mb-2">
                Price is required
              </label>:
              <label htmlFor="price" className="text-gray-300 mb-2">
                Price
              </label>
              }
              <input
              {...register("price", { required: "Price is required" })}
                type="text"
                id="price"
                className="px-4 py-2 bg-slate-800 text-white border placeholder:text-white border-gray-600 rounded-t-md rounded-b-none focus:outline-none focus:border-yellow-500"
                placeholder="food price in usd"
              />
            </div>
          </div>
          <div className="flex flex-col mb-2">
            {
              errors.recipe ? 
            <label htmlFor="recipe" className="text-red-500 mb-4">
              Recipe details are required
            </label>:

            <label htmlFor="recipe" className="text-gray-300 mb-4">
              Recipe Details
            </label>
            }
            <textarea
            {...register("recipe", { required: "Recipe is required" })}
              id="recipe"
              rows="5"
              className="px-4 py-2 bg-slate-800 text-white border border-gray-600 rounded-t-md focus:outline-none focus:border-yellow-500"
              placeholder="Write recipe here..."
            ></textarea>
          </div>
          <div className="grid grid-cols-1 gap-6 mb-6">
            <div  className="flex items-center">
              <label
                htmlFor="image"
                className="cursor-pointer bg-slate-800 text-white py-2 px-6 rounded mr-6 shadow hover:bg-gray-900 transition-all"
              >
                Choose File
              </label>
              <input 
              onChange={handleFileChange}
            //   {...register("image", { required: true })}
               type="file" 
               id="image" 
               className="hidden" ></input>
              {selectedImage ? <div className="w-2/5 mt-6"> <img src={URL.createObjectURL(selectedImage)}></img> <span className="text-white ml-3">{nameImage}</span></div>: <span className="text-white pt-7">No file chosen</span>}
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-gradient-to-r from-slate-600  to-[#f89f06] text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-125 font-satisfy transition duration-300 ease-in-out"
            >
              {
                loading ? <span className="loading loading-bars loading-sm"></span>
                : <>
                <ImSpoonKnife className="inline mr-2 text-xl"></ImSpoonKnife>
                ADD ITEM
                </>
              }

            </button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItemForm;
