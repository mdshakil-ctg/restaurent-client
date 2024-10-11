import { useForm } from "react-hook-form";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import OurLocation from "../../ContactUs/OurLocation/OurLocation";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useModal from "../../../Hooks/useModal";
import DashboardButton from './../../../components/DashboardButton/DashboardButton';

const Reservation = () => {
  const { openModal = {} } = useModal();
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
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
      guest: data.guest,
    };
    const res = await axiosSecure.post("/booking", { bookingData });
    console.log(res);
    if (res.data.insertedId) {
      openModal({
        title: "success!",
        message: `Reserved table done`,
        autoCloseTime: 3000,
      });
      reset();
    }
  };

  return (
    <div className="">
      <div className="flex">
        <div className=" max-w-4xl mx-auto bg-black px-4 md:p-12 lg:p-16">
          {/* Form Title */}
          {errors && <span>{errors.message}</span>}
          <div className="text-white">
            <SectionTitle
              title="book a table"
              subTitle="reservation"
            ></SectionTitle>
          </div>

          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-5 pb-10 md:p-10 md:pb-20 bg-[#1C1C1C] max-h-screen">
              {/* Date section  */}
              <div className="flex flex-col">
                <label htmlFor="date" className="text-gray-300 text-sm  mb-2">
                  Date
                </label>
                <input
                  {...register("date", { required: true })}
                  type="date"
                  id="date"
                  className="px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-b-none focus:outline-none focus:border-yellow-500"
                  placeholder="--/--/--"
                />
              </div>
              {/* time section  */}
              <div className="flex flex-col">
                <label htmlFor="time" className="text-gray-300 text-sm mb-2">
                  Time
                </label>
                <input
                  {...register("time", { required: true })}
                  type="time"
                  id="time"
                  className="px-4 py-2 bg-gray-700 text-white border border-gray-600  rounded-b-none focus:outline-none focus:border-yellow-500"
                  placeholder=""
                />
              </div>
              {/* guest section */}
              <div className="flex flex-col">
                <label htmlFor="guest" className="text-red-300 text-sm mb-4">
                  Guest
                </label>
                <select
                  {...register("guest", { required: true })}
                  id="guest"
                  className="px-4 py-[12px] bg-gray-700 text-white border border-gray-600  focus:outline-none focus:rounded-t-md focus:text-black focus:border-yellow-500"
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
                <label htmlFor="name" className="text-gray-300 text-sm mb-2">
                  Name
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  id="time"
                  className="px-4 py-2 bg-gray-700 text-white border border-gray-600  placeholder:text-slate-200 rounded-b-none focus:outline-none focus:border-yellow-500"
                  placeholder="Host name here"
                />
              </div>
              {/* Phone section  */}
              <div className="flex flex-col">
                <label htmlFor="phone" className="text-gray-300 text-sm mb-2">
                  Phone
                </label>
                <input
                  {...register("phone", { required: true })}
                  type="text"
                  id="time"
                  className="px-4 py-2 bg-gray-700 text-white border border-gray-600  rounded-b-none focus:outline-none focus:border-yellow-500 placeholder:text-slate-200 "
                  placeholder="Host Phone Number"
                />
              </div>
               {/* table section */}
               <div className="flex flex-col">
                <label htmlFor="table" className="text-red-300 text-sm mb-4">
                  Table
                </label>
                <select
                  {...register("table", { required: false })}
                  id="table"
                  className="px-4 py-[12px] bg-gray-700 text-white border border-gray-600  focus:outline-none focus:rounded-t-md focus:text-black focus:border-yellow-500"
                >
                  <option className="hover:bg-yellow-500" value="1">
                  Main Dining Area
                  </option>
                  <option className="hover:bg-yellow-500" value="2">
                  Near the Window
                  </option>
                  <option className="hover:bg-yellow-500" value="3">
                  Booth Seating
                  </option>
                  <option className="hover:bg-yellow-500" value="4">
                  Close to the Bar
                  </option>
                  <option className="hover:bg-yellow-500" value="5">
                  Private/Dedicated Room
                  </option>
                  <option className="hover:bg-yellow-500" value="6">
                  Patio Seating
                  </option>
                  <option className="hover:bg-yellow-500" value="7">
                  Garden Area
                  </option>
                  <option className="hover:bg-yellow-500" value="8">
                  Rooftop
                  </option>
                </select>
              </div>
              {/* email section  */}
              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-300 text-sm mb-2">
                  Email
                </label>
                <input
                  {...register("email", { required: true, disabled: true })}
                  type="email"
                  id="time"
                  className="px-4 py-2 bg-gray-700 text-white border border-gray-600  rounded-b-none focus:outline-none focus:border-yellow-500 placeholder:text-slate-200 "
                  placeholder={user?.email}
                />
              </div>
            </div>

            <div className="flex justify-center mt-20">
              
              <DashboardButton type='submit' small text="Confirm Bookings"/>
            </div>
          </form>
        </div>
      </div>
      
      <div className="px-8 md:px-12 lg:px-16">
      <OurLocation></OurLocation>
      </div>
    </div>
  );
};

export default Reservation;
