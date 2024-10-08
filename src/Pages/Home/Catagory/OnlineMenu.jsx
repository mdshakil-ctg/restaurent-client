import { Pagination, Autoplay } from "swiper/modules"; // Import Autoplay correctly
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

const OnlineMenu = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      grabCursor={true}
      loop={true} // Enable looping to make autoplay continuous
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2000, // Time between slides (3 seconds)
        disableOnInteraction: false, // Autoplay continues after interaction
      }}
      speed={1000} // Smooth 1-second transition speed
      modules={[Pagination, Autoplay]} // Use correct module names
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={slide1} alt="Salads" />
        <p className="text-white font-semibold text-xl opacity-80 p-4 relative bottom-24">SALADS</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="Pizzas" />
        <p className="text-white font-semibold text-xl opacity-60 p-4 relative bottom-24">PIZZAS</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="Soups" />
        <p className="text-white font-semibold text-xl opacity-60 p-4 relative bottom-24">SOUPS</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt="Desserts" />
        <p className="text-white font-semibold text-xl opacity-60 p-4 relative bottom-24">DESSERTS</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide5} alt="Salads" />
        <p className="text-white font-semibold text-xl opacity-60 p-4 relative bottom-24">SALADS</p>
      </SwiperSlide>
    </Swiper>
  );
};

export default OnlineMenu;
