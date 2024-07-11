// src/HomeSlider.js
import React from "react";
import { Navigation, Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { product_Slider } from "./data";
import { styled } from "styled-components";

function HomeSlider() {
  return (
    <Wrapper>
      <section>
        <Swiper
          modules={[Autoplay, Navigation, A11y]}
          spaceBetween={15}
          slidesPerView={6}
          navigation
          //   pagination={{ clickable: true }}
          //   scrollbar={{ draggable: true }}

          autoplay={{
            delay: 6000, // 3 seconds
            disableOnInteraction: false,
          }}
        >
          {product_Slider.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </Wrapper>
  );
}

export default HomeSlider;

const Wrapper = styled.section`
  .swiper {
    width: 100%;
    height: 100%;
    margin: 35px;
  }
  .swiper-button-prev,
  .swiper-button-next {
    color: #fff !important;
  }

  .swiper-slide img {
    display: block;
    width: 85%;
    height: auto;
    object-fit: contain;
  }
`;
