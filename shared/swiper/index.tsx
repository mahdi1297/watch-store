import React from "react";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";

type Props = {
  children: React.ReactNode;
};

const SwiperSlider: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Swiper
        modules={[Navigation]}
        navigation
        pagination={{ clickable: false }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
