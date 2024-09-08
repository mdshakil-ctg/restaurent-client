import { PiPhoneCallFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { RiTimeFill } from "react-icons/ri";

const OurLocation = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 ">
        <div className="text-center border">
            <div className="flex justify-center bg-[#D1A054] py-5 ">
            <PiPhoneCallFill className="text-2xl text-white" />
            </div>
            <div className="h-[240px] bg-[#F3F3F3] m-8 mt-0 flex flex-col justify-center">
                <p className="text-2xl uppercase font-semibold mb-2">phone</p>
                <span className="capitalize">+38 (012) 34 56 789</span>
            </div>
        </div>
        <div className="text-center border">
            <div className="flex justify-center bg-[#D1A054] py-5 ">
            <FaLocationDot className="text-2xl text-white" />
            </div>
            <div className="h-[240px] bg-[#F3F3F3] m-8 mt-0 flex flex-col justify-center">
                <p className="text-2xl uppercase font-semibold mb-2">address</p>
                <span className="capitalize">+38 (012) 34 56 789</span>
            </div>
        </div>
        <div className="text-center border">
            <div className="flex justify-center bg-[#D1A054] py-5 ">
            <RiTimeFill className="text-2xl text-white" />
            </div>
            <div className="h-[240px] bg-[#F3F3F3] m-8 mt-0 flex flex-col justify-center">
                <p className="text-2xl uppercase font-semibold mb-2">working hours</p>
                <p className="capitalize">Mon - Fri 08:00 - 22:00</p>
                <p className="capitalize">Sat - Sun 10:00 - 23:00</p>
            </div>
        </div>
        
       
    </div>
    );
};

export default OurLocation;