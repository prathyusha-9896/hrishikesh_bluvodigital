'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/autoplay';
import '../app/globals.css';

const images = [
  '/Images/img4.png',
  '/Images/img5.png',
  '/Images/img6.png',
  '/Images/img7.png',
  '/Images/img8.png',
  '/Images/img2.png',
  '/Images/img3.png',
];

export default function ImageSwiper() {
  const duplicatedImages = [...images, ...images, ...images]; // Duplicate to avoid blank gap

  return (
    <div className="swiper curved-swiper">
      <Swiper
        spaceBetween={20}
        breakpoints={{
          0: {
            slidesPerView: 1.2, // 👈 For mobile
          },
          768: {
            slidesPerView: 3, // 👈 For tablets
          },
          1024: {
            slidesPerView: 5, // 👈 For desktops
          },
        }}
        loop={true}
        // loopedSlides removed as it is not a valid property
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={2000} // long smooth scroll
        freeMode={{
          enabled: true,
          momentum: false,
        }}
        allowTouchMove={false}
        modules={[Autoplay]}
      >
        {duplicatedImages.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="h-[200px] image-slide overflow-hidden">
              <Image
                src={src}
                alt={`slide-${index}`}
                width={100}
                height={100}
                className="w-[85%] md:w-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
