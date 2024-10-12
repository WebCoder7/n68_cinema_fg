import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import panda from "../assets/panda.png";
import king_kong from "../assets/king-kong.png";
import cinema_market from "../assets/cinema-market.png";
import { useState } from "react";
import "../style/Slider.css";

function Slider() {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
      >
        <SwiperSlide>
          <img src={panda} alt="Panda" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={king_kong} alt="King Kong" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slider-image"
            src={cinema_market}
            alt="Cinema Market"
          />
        </SwiperSlide>
      </Swiper>

      <div className="slider-buttons">
        <button
          className="slider-button"
          onClick={() => swiperInstance?.slidePrev()}
        >
          {" < "}
        </button>

        <button
          className="slider-button"
          onClick={() => swiperInstance?.slideNext()}
        >
          {" > "}
        </button>
      </div>
    </div>
  );
}

export default Slider;
