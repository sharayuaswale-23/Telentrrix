import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import slide1 from "../../../assets/carousel1.png"; // Replace with actual image
import slide2 from "../../../assets/carousel2.png"; // Replace with actual image

const CarouselSection = () => {
  const [showHelp, setShowHelp] = useState(true);

  return (
    <div className="relative w-full">
      {/* Swiper Carousel (with margin to avoid navbar overlap) */}
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        navigation={{
          nextEl: ".next-button",
          prevEl: ".prev-button",
        }}
        className="w-full h-[500px] md:h-[600px] mt-[80px] relative"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="relative w-full h-full flex flex-col justify-center items-center text-white"
            style={{
              backgroundImage: `url(${slide1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="relative w-full h-full flex flex-col items-center text-white"
            style={{
              backgroundImage: `url(${slide2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h2 className="text-2xl md:text-4xl font-semibold text-center mt-10 max-w-2xl">
              Empowering Businessess and Careers through Applied Human Intelligence
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Navigation Arrows */}
      <button className="prev-button absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-300 p-2 rounded-full text-gray-700">
        <FaChevronLeft size={20} />
      </button>
      <button className="next-button absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-300 p-2 rounded-full text-gray-700">
        <FaChevronRight size={20} />
      </button>


      {/* Bottom Navigation - FIXED POSITION OVER CAROUSEL */}
      <div className="absolute mx-12 bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[90%] bg-white/90 backdrop-blur-md shadow-lg flex justify-around text-center text-black rounded-t-lg z-20">
            <a href="#" className="font-semibold px-16 py-4 hover:bg-blue-900 hover:text-white underline border-r border-gray-500">
            <span>Managed Services and Project Delivery</span>
            </a>
            <a href="#" className="font-semibold underline border-r border-gray-500 px-12 py-4 hover:bg-blue-900 hover:text-white">
            <span>Workforce Solutions</span>
            </a>
            <a href="#" className="font-semibold underline border-r border-gray-500 px-12 py-4 hover:bg-blue-900 hover:text-white">
            <span>Diversity and Inclusion Programs</span>
            </a>
            <a href="#" className="font-semibold underline px-12 py-4 hover:bg-blue-900 hover:text-white">
            <span>Consulting Opportunities</span>
            </a>
            </div>

    </div>
  );
};

export default CarouselSection;
