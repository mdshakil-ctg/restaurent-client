import { AiOutlineFacebook } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io5";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaHeadset } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";

const ContactForm = () => {
    return (
        <div className="grid grid-cols-12 max-w-screen-lg mx-auto relative shadow-2xl my-32  bg-slate-300">
                <div className="col-span-10 p-16">
                    <div className="space-y-3">
                        <h3 className="text-4xl font-bold font-satisfy">Contact Us</h3>
                        <p className="text-xs italic ">Feel Free to contact us any time. <br /> We will get back to you as soon as we can!</p>
                    </div>
                    <div className="flex flex-col space-y-10 my-10">
                        
                        <input className="w-1/2 border-b border-b-orange-300 bg-slate-300 p-2 pl-3 font-medium placeholder:text-sm focus:outline-none  focus:border-b-sky-500 " type="text" name="" id="" placeholder="Name" />
                        <input className="w-1/2 border-b border-b-orange-300 p-2 bg-slate-300 font-medium pl-3 placeholder:text-sm focus:outline-none  focus:border-b-sky-500 " type="text" name="" id="" placeholder="Email" />
                        <textarea className="w-1/2 border-b border-b-orange-300 h-[35px] bg-slate-300  pl-3 placeholder:text-sm focus:outline-none  focus:border-b-sky-500 " placeholder="Message"></textarea>
                    </div>
                    <div>
                        <input className="btn w-1/2 rounded-3xl bg-gradient-to-r from-[#d1a84f] to-white" type="submit" value="Send" />
                    </div>
                </div>
                <div className="col-span-2 bg-gradient-to-b from-slate-400 to-white h-full flex justify-between items-end p-5 cursor-pointer">
                <AiOutlineFacebook className="text-4xl" />
                <IoLogoInstagram className="text-4xl "/>
                <AiOutlineLinkedin className="text-4xl "/>
                </div>
                <div className=" w-[500px] space-y-8 p-12 bg-[#2D2D2D] text-slate-300 rounded-l-3xl absolute right-0 top-1/2 transform -translate-y-1/2">
                    <div>
                        <h4 className="text-xl font-semibold">Developer Info</h4>
                    </div>
                    <div className="flex items-center space-x-3 text-xs">
                        <span><FaHeadset /></span>
                        <span>+880 1815 149399</span>
                    </div>
                    <div className="flex items-center space-x-3 text-xs">
                        <span><MdAttachEmail /></span>
                        <span>developer.shakil.ctg@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3 text-xs">
                        <span><FaMapLocationDot /></span>
                        <span>4503, Raozan, Chittagong <br /> service city across BD, USA, <br /> Canada & UAE</span>
                    </div>
                </div>
        </div>
    );
};

export default ContactForm;