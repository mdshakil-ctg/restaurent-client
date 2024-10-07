import footerImg from "../../../assets/footer/footer.jpg";


const Footer = () => {
  return (
    <div
      className="grid md:grid-cols-3 text-white text-center h-[350px]"
      style={{
        backgroundImage: `url(${footerImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div></div>
      <div className=" flex flex-col justify-center items-center p-10">
        <h3 className="font-semibold text-2xl mb-3 font-satisfy">Our Office</h3>
        <div className="text-center text-xs text-orange-400 font-semibold grid gap-1">
          <p>123 ABS Street, Uni 21, Bangladesh</p>
          <p>+88 123456789</p>
          <p>Mon - Fri: 08:00 - 22:00</p>
          <p>Sat - Sun : 10:00 - 23:00</p>
        </div>
        <p className="text-xs ">Copyright © {new Date().getFullYear()} - {"All right reserved by Pothik's restaurent"}</p>
      </div>

      <footer className={`footer footer-center p-10`}>
        
      </footer>
    </div>
  );
};

export default Footer;
