import { useForm } from "react-hook-form";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useContext, useState } from "react";
import { FaCheckDouble } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import LoaderCup from "../../../components/LoaderCup/LoaderCup";

const Payment = () => {
  // const { openModal = {} } = useModal();
  const { user } = useContext(AuthContext);

  const axiosSecure = useAxiosSecure();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const itemsParam = queryParams?.get("items");
  const itemsId = itemsParam ? itemsParam.split(",") : [];
  // console.log(itemsId);

  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm();
  const handlePaymentSubmit = async (data) => {
    setIsSubmitting(true);
    const paymentData = {
      email: user?.email,
      name: user?.displayName,
      phone: data.phone,
      region: data.region,
      city: data.city,
      currency: data.currency,
      address: data.address,
      orderIds: itemsId,
      date: new Date().toLocaleDateString(),
    };

    try {
      const res = await axiosSecure.post(`/order`, paymentData);
      window.location.replace(res.data);
    } catch (error) {
      console.error("Payment submission failed:", error);
      // Re-enable button if an error occurs
      setIsSubmitting(false);
    }
  };

  isSubmitting && <LoaderCup></LoaderCup>;
  return (
    <div>
      <div className="flex ">
        <div className="min-h-screen w-full max-w-4xl bg-black p-16">
          {/* Form Title */}
          {errors && <span>{errors.message}</span>}
          <div className="text-white">
            <h5>Delivery Information</h5>
          </div>

          <form onSubmit={handleSubmit(handlePaymentSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-2">
              {/* email section  */}
              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-300 mb-2">
                  Email
                </label>
                <input
                  {...register("email", { required: true, disabled: true })}
                  type="email"
                  id="time"
                  defaultValue={user?.email}
                  className="px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-t-md rounded-b-none focus:outline-none focus:border-yellow-500"
                  placeholder={user?.email}
                />
              </div>
              {/* Name section  */}
              <div className="flex flex-col">
                <label htmlFor="name" className="text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  {...register("name", { required: true, disabled: true })}
                  defaultValue={user?.displayName}
                  type="text"
                  id="name"
                  className="px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-t-md rounded-b-none focus:outline-none focus:border-yellow-500"
                  placeholder={user?.displayName}
                />
              </div>
              {/* Region section  */}
              <div className="flex flex-col">
                <label htmlFor="region" className="text-gray-300 mb-2">
                  Region
                </label>
                <input
                  {...register("region", { required: true })}
                  type="text"
                  id="region"
                  className="px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-t-md rounded-b-none focus:outline-none focus:border-yellow-500"
                  placeholder="Please choose your region"
                />
              </div>
              {/* Phone section  */}
              <div className="flex flex-col">
                <label htmlFor="phone" className="text-gray-300 mb-2">
                  Phone
                </label>
                <input
                  {...register("phone", { required: true })}
                  type="number"
                  id="time"
                  className="px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-t-md rounded-b-none focus:outline-none focus:border-yellow-500"
                  placeholder="Host Phone Number"
                />
              </div>
              {/* city section  */}
              <div className="flex flex-col">
                <label htmlFor="city" className="text-gray-300 mb-2">
                  City
                </label>
                <input
                  {...register("city", { required: true })}
                  type="text"
                  id="city"
                  className="px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-t-md rounded-b-none focus:outline-none focus:border-yellow-500"
                  placeholder="Please choose your city"
                />
              </div>
              {/* currency section */}
              <div className="flex flex-col">
                <label htmlFor="currency" className="text-gray-300 mb-4">
                  Currency
                </label>
                <select
                  {...register("currency", { required: true })}
                  defaultValue={"BDT"}
                  id="currency"
                  className="px-4 py-[13px] bg-yellow-500 text-white border border-gray-600 rounded-t-md focus:outline-none focus:rounded-t-md focus:text-black focus:border-yellow-500"
                >
                  <option className="hover:bg-yellow-500" value="BDT">
                    BDT
                  </option>
                  <option className="hover:bg-yellow-500" value="usd">
                    USD
                  </option>
                </select>
              </div>
              {/* address section  */}
              <div className="flex flex-col">
                <label htmlFor="address" className="text-gray-300 mb-2">
                  Address
                </label>
                <input
                  {...register("address", { required: true })}
                  type="text"
                  id="address"
                  className="px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-t-md rounded-b-none focus:outline-none focus:border-yellow-500"
                  placeholder="Full address here"
                />
              </div>
            </div>

            <div className="flex justify-center mt-20">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-5 text-sm py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-all duration-300"
              >
                {isSubmitting ? (
                  <span className="loading loading-bars loading-md"></span>
                ) : (
                  <>
                    <FaCheckDouble className="inline mr-2 text-xl" />
                    Proceed to Pay
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <SectionTitle title="our location" subTitle="visit us"></SectionTitle>
    </div>
  );
};

export default Payment;
