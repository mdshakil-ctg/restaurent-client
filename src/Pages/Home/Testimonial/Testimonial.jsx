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
    <section className="md:mb-20">
      <SectionTitle title="testimonials" subTitle="What Our Client Say" />
      {isLoading ? (
        <div className="">
          <TestimonialSkeleton />
        </div>
      ) : (
        <div className="my-10 mx-28">
          <Swiper
            autoplay={{ delay: 2000 }} // Set autoplay with 3 seconds delay
            navigation={true}
            modules={[Navigation, Autoplay]} // Include Autoplay in modules
            className="mySwiper"
          >
            {datas.map((data) => (
              <SwiperSlide key={data._id}>
                <div className="text-center flex flex-col justify-center items-center space-y-4 mx-16">
                  <FaQuoteLeft className="text-8xl" />
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
