import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const TextCarousel = () => {
  const texts = [
    "Text Slide 1",
    "Text Slide 2",
    "Text Slide 3",
    "Text Slide 4",
    "Text Slide 5",
    // Add more texts as needed
  ];

  return (
    <Swiper
      // Install modules
      modules={[Pagination, Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {texts.map((text, index) => (
        <SwiperSlide key={index}>
          <h3>{text}</h3>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TextCarousel;
