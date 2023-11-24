/* eslint-disable react/no-array-index-key */
import { ReactNode } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';

interface IProps {
  children: ReactNode[];
}

export const ActiveSlides = ({ children }: IProps) => (
  <Swiper
    modules={[Autoplay]}
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
    loop
    spaceBetween={60}
    centeredSlides
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    {children.map((element, index) => (
      <SwiperSlide key={index} className="swiperSlide">
        {element}{' '}
      </SwiperSlide>
    ))}
  </Swiper>
);
