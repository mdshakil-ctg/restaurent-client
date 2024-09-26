import { useContext, useState } from "react";
import SectionTitle from "./../../Shared/SectionTitle/SectionTitle";
import { FaRocket } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import useModal from "../../../Hooks/useModal";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AddReview = () => {

  const [rating, setRating] = useState(1);
  const { openModal = {} } = useModal();
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  console.log(rating);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const handleFormSubmit = async (data) => {
    console.log(data);
    const reviewData = {
     recipe: data.recipe,
     suggestion: data.suggestion,
     details: data.description,
     email: user?.email,
     name: user?.displayName,
     rating
    };
    const res = await axiosSecure.post("/review", { reviewData });
    console.log(res.data);
    if (res.data.insertedId) {
      openModal({
        title: "Review done!",
        message: `Thanks for your valuable review`,
        autoCloseTime: 2000,
      });
      reset();
    }
  };

  const handleClick = (value) => {
    setRating(value);
    // Call the onRate function to pass the rating to the parent component
  };
  return (
    <div>
      <SectionTitle
        title="give a review"
        subTitle="sharing is caring!!!"
      ></SectionTitle>
      <div>
        <p>RATE Us!</p>
        {errors && <span>{errors.message}</span>}
        <div
          style={{ display: "flex", cursor: "pointer" }}
          className="hover: text-yellow-500"
        >
          {[1, 2, 3, 4, 5].map((value) => (
            <svg
              key={value}
              onClick={() => handleClick(value)}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={value <= rating ? "gold" : "gray"}
            >
              <path d="M12 .587l3.668 7.568 8.432 1.214-6.093 5.897 1.434 8.452L12 18.897l-7.441 3.908 1.434-8.452-6.093-5.897 8.432-1.214z" />
            </svg>
          ))}
        </div>
      </div>
      {/* form section */}
      <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="grid grid-cols-1 gap-6 mb-2">
              {/* recipe section  */}
              <div className="flex flex-col">
                <label htmlFor="recipe" className="text-gray-300 mb-2">
                  Which recipe you liked most?
                </label>
                <input
                  {...register("recipe", { required: true })}
                  type="text"
                  id="recipe"
                  className="px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-t-md rounded-b-none focus:outline-none focus:border-yellow-500"
                  placeholder="Ricpe you liked most"
                />
              </div>
              {/* suggestion section  */}
              <div className="flex flex-col">
                <label htmlFor="suggestion" className="text-gray-300 mb-2">
                  Do you have any suggestion for us?
                </label>
                <input
                  {...register("suggestion", { required: true })}
                  type="text"
                  id="suggestion"
                  className="px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-t-md rounded-b-none focus:outline-none focus:border-yellow-500"
                  placeholder="Suggestion"
                />
              </div>
             
              {/* description section  */}
              <div className="flex flex-col">
                <label htmlFor="description" className="text-gray-300 mb-2">
                  Kindly express your care in a short way.
                </label>
                <input
                  {...register("description", { required: true })}
                  type="text"
                  id="description"
                  className="px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-t-md rounded-b-none focus:outline-none focus:border-yellow-500"
                  placeholder="Review in detail"
                />
              </div>    
            </div>

            <div className="flex justify-center mt-20">
              <button
                type="submit"
                className="px-5 text-sm py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-all duration-300"
              >
                <FaRocket className="inline mr-2 text-xl"></FaRocket>
                Confirm Bookings
              </button>
            </div>
          </form>
    </div>
  );
};

export default AddReview;
