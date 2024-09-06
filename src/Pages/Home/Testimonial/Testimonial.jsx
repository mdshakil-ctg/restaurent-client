import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { UseCardDataApi } from "../../../Hooks/CardDataApi/UseCardDataApi";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  const datas = UseCardDataApi('reviews');

  return (
    <section className="md:mb-20">
      <SectionTitle title="testimonials" subTitle="What Our Client Say" />
      <div className="my-10 mx-28">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {datas.map((data) => (
            <SwiperSlide key={data._id}>
              <div className="text-center flex flex-col justify-center items-center space-y-2 mx-16">
              <FaQuoteLeft className="text-8xl"/>
                <Rating style={{ maxWidth: 180 }} value={data.rating} readOnly />
                <p>{data.details}</p>
                <h5 className="text-[#CD9003] font-semibold">{data.name}</h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
