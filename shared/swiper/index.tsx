import React from "react";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";

type Props = {
  children: React.ReactNode;
  breakPoints?: any
};

const initialBreakPoint = {
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
}

const SwiperSlider: React.FC<Props> = ({ children, breakPoints = initialBreakPoint }) => {
  return (
    <div>
      <Swiper
        modules={[Navigation]}
        navigation
        pagination={{ clickable: false }}
        scrollbar={{ draggable: true }}
        breakpoints={breakPoints}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
