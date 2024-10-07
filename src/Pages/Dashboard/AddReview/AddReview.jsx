import { useContext, useState } from "react";
import SectionTitle from "./../../Shared/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useModal from "../../../Hooks/useModal";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import DashboardButton from "../../../components/DashboardButton/DashboardButton";

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
        autoCloseTime: 3000,
      });
      reset();
    }
  };

 
  return (
    <div className="max-w-screen-lg p-20 pt-0">
      <SectionTitle
        title="give a review"
        subTitle="sharing is caring!!!"
      ></SectionTitle>
      <div className=" text-center">
        <p className="mb-3">RATE US!</p>
        {errors && <span>{errors.message}</span>}
        <div
          
          className="hover: text-yellow-500 flex justify-center space-x-3  "
        >
          {[1, 2, 3, 4, 5].map((value) => (
            <svg
              key={value}
              className="cursor-pointer"
              onClick={() => setRating(value)}
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill={value <= rating ? "gold" : "gray"}
            >
              <path d="M12 .587l3.668 7.568 8.432 1.214-6.093 5.897 1.434 8.452L12 18.897l-7.441 3.908 1.434-8.452-6.093-5.897 8.432-1.214z" />
            </svg>
          ))}
        </div>
      </div>
      {/* form section */}
      <form className="m-20" onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="bg-[#1C1C1C] space-y-5 p-10">
              {/* recipe section  */}
              <div className="flex flex-col">
                <label htmlFor="recipe" className="text-gray-300 text-sm m-0 mb-1 ">
                  Which recipe you liked most?
                </label>
                <input
                  {...register("recipe", { required: true })}
                  type="text"
                  id="recipe"
                  className="px-4 py-2 mb-2 bg-gray-700 text-white border border-gray-600 rounded-none rounded-tr-lg rounded-bl-lg  focus:outline-none focus:border-yellow-500"
                  placeholder="Ricpe you liked most"
                />
              </div>
              {/* suggestion section  */}
              <div className="flex flex-col">
                <label htmlFor="suggestion" className="text-gray-300 text-sm m-0 mb-1">
                  Do you have any suggestion for us?
                </label>
                <input
                  {...register("suggestion", { required: true })}
                  type="text"
                  id="suggestion"
                  className="px-4 py-2 mb-2 bg-gray-700 text-white border border-gray-600 rounded-none rounded-tr-lg rounded-bl-lg focus:outline-none focus:border-yellow-500"
                  placeholder="Suggestion"
                />
              </div>
             
              {/* description section  */}
              <div className="flex flex-col">
                <label htmlFor="description" className="text-gray-300 text-sm m-0 mb-1">
                  Kindly express your care in a short way.
                </label>
                <input
                  {...register("description", { required: true })}
                  type="text"
                  id="description"
                  className="px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-none rounded-tr-lg rounded-bl-lg focus:outline-none focus:border-yellow-500"
                  placeholder="Review in detail"
                />
              </div>    
            </div>

            <div className="flex justify-center mt-20">
              <DashboardButton type='submit' text="Give Review" small></DashboardButton>
            </div>
          </form>
    </div>
  );
};

export default AddReview;
