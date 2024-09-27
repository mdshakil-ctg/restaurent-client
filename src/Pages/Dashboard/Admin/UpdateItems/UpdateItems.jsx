import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useModal from "../../../../Hooks/useModal";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "axios";

const UpdateItems = () => {
  const { openModal = {} } = useModal();
  const [selectedImage, setSelectedImage] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const imageApi = import.meta.env.VITE_IMAGEBB_API;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${imageApi}`;
  const { id } = useParams();
  const navigate = useNavigate()
  // get the item information from the server
  const axiosSecure = useAxiosSecure();
  const { data: item = {}, isSuccess, isLoading, isFetching } = useQuery({
    queryKey: ["menuItem", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/menuItem/${id}`);
      return res.data;
    },
    enabled: !!id, // Enable query only if id exists
  });

  // Form setup
  const { register, handleSubmit, reset } = useForm();

  // When `item` is fetched and `isSuccess` is true, reset form values
  useEffect(() => {
    if (isSuccess && item && !imgUrl) {
      reset({
        name: item?.name || "",
        recipe: item?.recipe || "",
        category: item?.category || "salad",
        price: item?.price || "",
      });
      setImgUrl(item?.image); // Set the image URL only once
    }
  }, [item, reset, isSuccess, imgUrl]);

  const handleUpdateItem = async (data) => {
    let updatedData = {};

    // Check if the image was changed
    if (selectedImage) {
      const formData = new FormData();
      formData.append("image", selectedImage);
      const resultApi = await axios.post(image_hosting_api, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      updatedData.image = resultApi.data.data.display_url;
    }

    // Compare form values with the existing item data and update only changed fields
    if (data.name !== item.name) updatedData.name = data.name;
    if (data.recipe !== item.recipe) updatedData.recipe = data.recipe;
    if (data.category !== item.category) updatedData.category = data.category;
    if (data.price !== item.price) updatedData.price = data.price;

    // If there are no changes, do nothing
    if (Object.keys(updatedData).length === 0) {
      openModal({
        title: "No Changes",
        message: `No changes were made to the item.`,
        autoCloseTime: 2000,
      });
      return;
    }

    // Send the updated fields to the server
    const res = await axiosSecure.put(`/updateItem/${id}`, updatedData);

    if (res.data.modifiedCount > 0) {
      reset();
      openModal({
        title: "Success!",
        message: `Data has been updated`,
        autoCloseTime: 2000,
      });
      navigate('/dashboard/manageItems')
    } else {
      openModal({
        title: "Update failed!",
        message: `Try again later.`,
        autoCloseTime: 2000,
        type: "confirm",
      });
    }
  };

  // Handle image file change
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  return (
    <div className="p-20">
      {/* Show loading spinner during initial loading */}
      {isLoading && <div className="spinner">Loading...</div>}

      {!isLoading && (
        <>
          <h1>Update item {item?.name}</h1>
          <form onSubmit={handleSubmit(handleUpdateItem)}>
            {/* name section */}
            <div className="flex flex-col mb-2">
              <label htmlFor="name" className="text-gray-300 mb-2">
                Recipe Name*
              </label>
              <input
                {...register("name")}
                type="text"
                id="name"
                className="px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:border-yellow-500"
                placeholder="Enter item name"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2">
              {/* category section */}
              <div className="flex flex-col">
                <label htmlFor="category" className="text-gray-300 mb-4">
                  Category*
                </label>
                <select
                  {...register("category")}
                  id="category"
                  className="px-4 py-[13px] bg-yellow-500 text-white border border-gray-600 rounded-t-md focus:outline-none focus:rounded-t-md focus:text-black focus:border-yellow-500"
                >
                  <option value="salad">Salad</option>
                  <option value="pizza">Pizza</option>
                  <option value="soup">Soup</option>
                  <option value="dessert">Dessert</option>
                  <option value="drinks">Drinks</option>
                </select>
              </div>

              {/* price section */}
              <div className="flex flex-col">
                <label htmlFor="price" className="text-gray-300 mb-2">
                  Price*
                </label>
                <input
                  {...register("price")}
                  type="text"
                  id="price"
                  className="px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-t-md rounded-b-none focus:outline-none focus:border-yellow-500"
                  placeholder="Enter price"
                />
              </div>
            </div>

            {/* recipe section */}
            <div className="flex flex-col mb-2">
              <label htmlFor="recipe" className="text-gray-300 mb-4">
                Recipe Details*
              </label>
              <textarea
                {...register("recipe")}
                id="recipe"
                rows="5"
                className="px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-t-md focus:outline-none focus:border-yellow-500"
                placeholder="Enter recipe details"
              ></textarea>
            </div>

            {/* image section */}
            <div className="flex items-center mb-6">
              <label
                htmlFor="image"
                className="cursor-pointer bg-gray-700 text-white py-2 px-6 rounded mr-6 shadow hover:bg-gray-900 transition-all"
              >
                Choose File
              </label>
              <input onChange={handleFileChange} type="file" id="image" className="hidden" />
              <div className="w-2/5 mt-6">
                {selectedImage ? (
                  <img src={URL.createObjectURL(selectedImage)} alt="Selected" />
                ) : (
                  <img src={imgUrl} alt="Current" />
                )}
              </div>
            </div>

            {/* update button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-5 text-sm py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-all duration-300"
                disabled={isFetching} // Disable while refetching
              >
                {isFetching ? "Updating..." : "UPDATE ITEM"}
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default UpdateItems;
