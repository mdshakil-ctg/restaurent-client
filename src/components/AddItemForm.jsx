import SectionTitle from "../Pages/Shared/SectionTitle/SectionTitle";
import { ImSpoonKnife } from "react-icons/im";
import { useForm } from "react-hook-form"
import { useState } from "react";
import axios from "axios";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const AddItemForm = () => {
const [selectedImage, setSelectedImage] = useState(null);
const [nameImage, setNameImage] = useState(null);
const imageApi = import.meta.env.VITE_IMAGEBB_API;
const image_hosting_api= `https://api.imgbb.com/1/upload?key=${imageApi}`
const axiosSecure = useAxiosSecure();


const handleFileChange = (event) =>{
    const file = event.target.files[0];
    setNameImage(event.target.files[0].name)
    // if(file){
    //     const reader = new FileReader();
    //     reader.onloadend = () =>{
    //         setSelectedImage(reader.result);
    //     }
    //     reader.readAsDataURL(file);
    // }
    if(file){
        setSelectedImage(file)
    }
}

 
const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const handleFormSubmit = async(data) => {


    if(!selectedImage){
        return alert('Please select an image first');
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
            console.log(result);
        }
}


  
  return (
    <div className="flex ">
      <div className="min-h-screen w-full max-w-4xl bg-black p-16">
        {/* Form Title */}
        {errors && <span>{errors.message}</span>}
        <div className="text-white">
          <SectionTitle
            title="add an item"
            subTitle="what's new"
          ></SectionTitle>
        </div>

        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="flex flex-col mb-2">
            <label htmlFor="name" className="text-gray-300 mb-2">
              Recipe Name*
            </label>
            <input
            {...register("name", { required: true })}
              type="text"
              id="name"
              className="px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:border-yellow-500"
              placeholder="Food title here"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2">
            <div className="flex flex-col">
              <label htmlFor="category" className="text-gray-300 mb-4">
                Category*
              </label>
              <select
              {...register("category", { required: true })}
                id="category"
                className="px-4 py-[13px] bg-yellow-500 text-white border border-gray-600 rounded-t-md focus:outline-none focus:rounded-t-md focus:text-black focus:border-yellow-500"
              >
                <option className="hover:bg-yellow-500" value="salad">
                  Salad
                </option>
                <option className="hover:bg-yellow-500" value="option1">
                  Pizza
                </option>
                <option className="hover:bg-yellow-500" value="soup">
                  Soup
                </option>
                <option className="hover:bg-yellow-500" value="dessert">
                  Dessert
                </option>
                <option className="hover:bg-yellow-500" value="drinks">
                  Drinks
                </option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="price" className="text-gray-300 mb-2">
                Price*
              </label>
              <input
              {...register("price", { required: true })}
                type="text"
                id="price"
                className="px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-t-md rounded-b-none focus:outline-none focus:border-yellow-500"
                placeholder=""
              />
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="recipe" className="text-gray-300 mb-4">
              Recipe Details*
            </label>
            <textarea
            {...register("recipe", { required: true })}
              id="recipe"
              rows="5"
              className="px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-t-md focus:outline-none focus:border-yellow-500"
              placeholder="Write recipe here..."
            ></textarea>
          </div>
          <div className="grid grid-cols-1 gap-6 mb-6">
            <div  className="flex items-center">
              <label
                htmlFor="image"
                className="cursor-pointer bg-gray-700 text-white py-2 px-6 rounded mr-6 shadow hover:bg-gray-900 transition-all"
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
              className="px-5 text-sm py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-all duration-300"
            >
              <ImSpoonKnife className="inline mr-2 text-xl"></ImSpoonKnife>
              ADD ITEM
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItemForm;
