import { useForm } from "react-hook-form";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { ImSpoonKnife } from "react-icons/im";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import OurLocation from "../../ContactUs/OurLocation/OurLocation";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Reservation = () => {
  const {user} = useContext(AuthContext)
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleFormSubmit = async (data) => {
    console.log(data);
    const bookingData = {
      date: data.date,
      email: user?.email,
      name: data.name,
      phone: data.phone,
      time: data.time,
      guest: data.guest
    };
    const res = await axiosSecure.post("/booking", { bookingData });
    console.log(res);
  };

  return (
    <div>
      <div className="flex ">
        <div className="min-h-screen w-full max-w-4xl bg-black p-16">
          {/* Form Title */}
          {errors && <span>{errors.message}</span>}
          <div className="text-white">
            <SectionTitle
              title="book a table"
              subTitle="reservation"
            ></SectionTitle>
          </div>

          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-2">
              {/* Date section  */}
              <div className="flex flex-col">
                <label htmlFor="date" className="text-gray-300 mb-2">
                  Date*
                </label>
                <input
                  {...register("date", { required: true })}
                  type="date"
                  id="date"
                  className="px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-t-md rounded-b-none focus:outline-none focus:border-yellow-500"
                  placeholder="--/--/--"
                />
              </div>
              {/* time section  */}
              <div className="flex flex-col">
                <label htmlFor="time" className="text-gray-300 mb-2">
                  Time*
                </label>
                <input
                  {...register("time", { required: true })}
                  type="time"
                  id="time"
                  className="px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-t-md rounded-b-none focus:outline-none focus:border-yellow-500"
                  placeholder="--/ -- --"
                />
              </div>
              {/* guest section */}
              <div className="flex flex-col">
                <label htmlFor="guest" className="text-gray-300 mb-4">
                  Guest*
                </label>
                <select
                  {...register("guest", { required: true })}
                  id="guest"
                  className="px-4 py-[13px] bg-yellow-500 text-white border border-gray-600 rounded-t-md focus:outline-none focus:rounded-t-md focus:text-black focus:border-yellow-500"
                >
                  <option className="hover:bg-yellow-500" value="1">
                    1 person
                  </option>
                  <option className="hover:bg-yellow-500" value="2">
                    2 person
                  </option>
                  <option className="hover:bg-yellow-500" value="3">
                    3 person
                  </option>
                  <option className="hover:bg-yellow-500" value="4">
                    4 person
                  </option>
                  <option className="hover:bg-yellow-500" value="5">
                    5 person
                  </option>
                  <option className="hover:bg-yellow-500" value="6">
                    6 person
                  </option>
                </select>
              </div>
              {/* name section  */}
              <div className="flex flex-col">
                <label htmlFor="name" className="text-gray-300 mb-2">
                  Name*
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  id="time"
                  className="px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-t-md rounded-b-none focus:outline-none focus:border-yellow-500"
                  placeholder="host name here"
                />
              </div>
              {/* Phone section  */}
              <div className="flex flex-col">
                <label htmlFor="phone" className="text-gray-300 mb-2">
                  Phone*
                </label>
                <input
                  {...register("phone", { required: true })}
                  type="number"
                  id="time"
                  className="px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-t-md rounded-b-none focus:outline-none focus:border-yellow-500"
                  placeholder="Host Phone Number"
                />
              </div>{" "}
              {/* email section  */}
              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-300 mb-2">
                  Email*
                </label>
                <input
                  {...register("email", { required: true ,disabled: true})}
                  type="email"
                  id="time"
                  className="px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-t-md rounded-b-none focus:outline-none focus:border-yellow-500"
                  placeholder={user?.email}
                />
              </div>
            </div>

            <div className="flex justify-center mt-20">
              <button
                type="submit"
                className="px-5 text-sm py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-all duration-300"
              >
                <ImSpoonKnife className="inline mr-2 text-xl"></ImSpoonKnife>
                Confirm Bookings
              </button>
            </div>
          </form>
        </div>
      </div>
      <SectionTitle title='our location' subTitle='visit us'></SectionTitle>
      <OurLocation></OurLocation>
    </div>
  );
};

export default Reservation;
