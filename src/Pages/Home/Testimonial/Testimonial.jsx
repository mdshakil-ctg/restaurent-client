import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // Correct Autoplay import
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { FaQuoteLeft } from "react-icons/fa";
import { useCardDataApi } from "../../../Hooks/CardDataApi/useCardDataApi";
import TestimonialSkeleton from "../../../components/Skeleton/TestimonialSkeleton";

const Testimonial = () => {
  const { datas, isLoading } = useCardDataApi("reviews");

  return (
    <section className="md:mb-20 px-6 lg:px-0">
      <SectionTitle title="testimonials" subTitle="What Our Client Say" />
      {isLoading ? (
        <div className="">
          <TestimonialSkeleton />
        </div>
      ) : (
        <div className="my-10 md:mx-28">
          <Swiper
            autoplay={{ 
              delay: 3000, // Set autoplay delay to 3 seconds
              disableOnInteraction: false, // Prevent autoplay from stopping when interacting
            }}
            loop={true}
            speed={2000} // 2 seconds transition speed
            navigation={true}
            modules={[Navigation, Autoplay]} // Include Navigation and Autoplay in modules
            className="mySwiper"
          >
            {datas.map((data) => (
              <SwiperSlide key={data._id}>
                <div className="text-center flex flex-col justify-center items-center space-y-4 mx-16">
                  <FaQuoteLeft className="text-4xl md:text-8xl" />
                  <Rating
                    className="rounded px-2 py-1"
                    style={{ maxWidth: 250 }}
                    value={data.rating}
                    readOnly
                  />
                  <p>{data.details}</p>
                  <h5 className="font-semibold">{data.name}</h5>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </section>
  );
};

export default Testimonial;
