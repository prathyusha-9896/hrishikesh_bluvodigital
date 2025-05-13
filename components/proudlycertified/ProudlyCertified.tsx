// component file: ProudlyCertified.tsx
'use client'
import Image from 'next/image';
import { useProudlyCertified } from './useProudlyCertified';
import { FaArrowRightLong  } from "react-icons/fa6";
import '../../app/globals.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function ProudlyCertified() {
  const { certifications, intro, stats, whyChoose } = useProudlyCertified();

  return (
<section className="px-6 sm:px-10 md:px-16 lg:px-36 xl:px-56 py-12 bg-white text-gray-900">
  {/* Heading */}
  <h2 className="text-center font-semibold text-xl sm:text-2xl mb-6">
    Proudly Certified By…    
  </h2>

  {/* Certification Logos */}
  <div className="flex justify-center items-center gap-4 md:gap-6 flex-wrap mb-10">
    {certifications.map((cert, idx) => (
      <Image
        key={idx}
        src={cert.src}
        alt={cert.alt}
        width={70}
        height={70}
        className="object-contain"
      />
    ))}
  </div>

  {/* Intro Section */}
  <div className="grid md:grid-cols-2 gap-10 md:gap-20 mb-12">
    <div className="flex justify-center md:justify-start">
      <h3 className="text-[24px] sm:text-[28px] md:text-3xl font-bold text-center md:text-left max-w-md leading-[36px] md:leading-[44px]">
        {intro.title}
      </h3>
    </div>

    <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
      <p className="text-gray-700 mb-4 text-sm sm:text-base comme-font max-w-md">{intro.description}</p>
      <button className="inline-flex items-center gap-3 text-black font-medium px-3 py-2 rounded-full transition duration-300 hover:bg-[#BDFFE8]">
        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-600 text-white text-sm transition duration-300">
          <FaArrowRightLong />
        </span>
        <span className="text-sm sm:text-base">{intro.ctaText}</span>
      </button>
    </div>
  </div>

  <hr className="border-t-2 border-black mb-10" />

  {/* Stats Section */}
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-8 gap-x-4 sm:gap-[26px] mb-12 text-left">
    {stats.map((stat, idx) => (
      <div key={idx}>
        <h4 className="text-xl sm:text-2xl font-ramillas font-bold text-black mb-1">{stat.value}</h4>
        <p className="text-sm comme-font font-medium leading-[24px] text-gray-600">{stat.label}</p>
      </div>
    ))}
  </div>

  {/* Why Choose Section */}
  <div className="grid md:grid-cols-2 gap-10 md:gap-20 mb-12">
    <div className="flex justify-start">
      <h3 className="text-[24px] text-left sm:text-[28px] md:text-3xl font-bold leading-[36px] md:leading-[43.2px] max-w-md">
        Why Choose Hrishikesh Yoga?
      </h3>
    </div>

    <div className="flex flex-col justify-center items-center md:items-start text-left">
      <p className="text-[#C3AA45] italic text-sm font-medium leading-[22px] mb-4 max-w-md">
        {whyChoose.quote.text}
      </p>
      <p className="text-[#252324BF] text-sm font-normal leading-[24px]  comme-font max-w-md">
        {whyChoose.quote.subtext}
      </p>
    </div>
  </div>

  {/* Features Grid */}
  <div className='hidden md:block'>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {whyChoose.features.map((feature, idx) => (
      <div key={idx} className="bg-[#FAF9F6] p-5 sm:p-6">
        <h4 className="font-medium font-ramillas mb-3 text-lg sm:text-xl text-[#252324] leading-[26px]">
          {feature.title}
        </h4>
        <p className="text-xs comme-font text-[#252324BF]">
          {feature.description}
        </p>
      </div>
    ))}
  </div>
  </div>

  <div className="lg:hidden">
<Swiper
  spaceBetween={16}
  slidesPerView={1.2}
  pagination={{
    clickable: true,
  }}
  modules={[Pagination]}
  className="w-full px-4 custom-swiper"
>
  {whyChoose.features.map((feature, idx) => (
    <SwiperSlide key={idx}>
      <div className="bg-[#FAF9F6] p-6 rounded-md h-full">
        <h4 className="font-medium font-ramillas mb-3 text-lg text-[#252324] leading-[26px]">
          {feature.title}
        </h4>
        <p className="text-sm comme-font text-[#252324BF]">{feature.description}</p>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

  </div>
</section>

  );
}
