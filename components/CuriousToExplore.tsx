'use client';
import Image from 'next/image';
import animationData from '../public/bg-animation.json';
import Lottie from 'lottie-react';
import { FaDownload } from 'react-icons/fa';
import curious from '../public/Images/curious.svg';

export default function CuriousToExplore() {
  return (
<section className="flex justify-center items-center py-12 px-0 md:px-20 lg:px-56">
  <div className="flex flex-col lg:flex-row max-w-7xl w-full bg-[#FAF9F6] overflow-hidden">
    {/* Left Content */}
    <div className="w-full lg:w-1/2 relative overflow-hidden px-6 sm:px-12 lg:px-14 py-10 lg:py-0 flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
      {/* Top-left flower animation */}
      <div className="absolute -top-28 -left-28 w-[40%] opacity-30 pointer-events-none">
        <Lottie animationData={animationData} loop autoplay />
      </div>
      {/* Bottom-right flower animation */}
      <div className="absolute -bottom-28 -right-28 w-[40%] opacity-30 pointer-events-none">
        <Lottie animationData={animationData} loop autoplay />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-tight font-medium text-[#252324] tracking-tight mb-4">
          Curious to Explore <br className="hidden sm:block" /> What You&apos;ll Learn?
        </h2>
        <p className="text-[#252324BF] comme-font text-[14px] sm:text-[16px] font-normal mb-6 max-w-md mx-auto lg:mx-0">
          Get an inside look at our comprehensive Yoga Teacher Training syllabus. Discover the transformative journey that awaits you at Hrishikesh Yoga.
        </p>
        <button className="bg-[#252324] comme-font text-[14px] font-medium text-white px-5 py-3 rounded-md inline-flex items-center gap-2 hover:bg-[#1a1a1a] transition">
          <FaDownload className="text-sm" />
          Download Your Free Syllabus
        </button>
      </div>
    </div>

    {/* Right Image */}
    <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-auto">
      <Image
        src={curious}
        alt="curious to explore"
        className="h-full w-full object-cover"
        width={800}
        height={600}
      />
    </div>
  </div>
</section>

  );
}
