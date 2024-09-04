import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

const OnlineMenu = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div className="absolute ">
            <SwiperSlide><img src={slide1} alt="" /><p className=' text-white font-semibold text-xl opacity-60 p-4 relative bottom-24'>SALADS</p></SwiperSlide>
            <SwiperSlide><img src={slide2} alt="" /><p className=' text-white font-semibold text-xl opacity-60 p-4 relative bottom-24'>PIZZAS</p></SwiperSlide>
            <SwiperSlide><img src={slide3} alt="" /><p className=' text-white font-semibold text-xl opacity-60 p-4 relative bottom-24'>SOUPS</p></SwiperSlide>
            <SwiperSlide><img src={slide4} alt="" /><p className='text-white font-semibold text-xl opacity-60 p-4  relative bottom-24'>DESSERTS</p></SwiperSlide>       
            <SwiperSlide><img src={slide5} alt="" /><p className=' text-white font-semibold text-xl opacity-60 p-4 relative bottom-24'>SALADS</p></SwiperSlide>       
        </div>
      </Swiper>
    </>
  );
};

export default OnlineMenu;
