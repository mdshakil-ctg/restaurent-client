import {FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import footerImg from "../../../assets/footer/footer.jpg";

const Footer = () => {
  return (
    <div
      className="grid grid-cols-1 text-white text-center relative"
      style={{
        backgroundImage: `url(${footerImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Our Office section */}
      <div className="flex flex-col justify-center items-center p-10 md:pt-12 md:pb-0 relative z-20">
        <h3 className="font-semibold text-2xl mb-3 font-satisfy">Our Office</h3>
        <div className="text-center text-xs text-gray-300 font-semibold grid gap-1">
          <p>123 ABS Street, Uni 21, Bangladesh</p>
          <p>+88 123456789</p>
          <p>Mon - Fri: 08:00 - 22:00</p>
          <p>Sat - Sun : 10:00 - 23:00</p>
        </div>
        <p className="text-xs text-gray-300">
          Copyright © {new Date().getFullYear()} - All rights reserved by
          Pothiks restaurant
        </p>
        {/* social media section */}
        <div className="flex space-x-3 mt-2 text-red-400 text-2xl">
          <FaFacebookSquare/>
          <FaInstagram/>
          <FaLinkedin/>
        </div>
      </div>

      <footer className={`footer footer-center md:p-10`}></footer>
    </div>
  );
};

export default Footer;
