'use client';
import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';
import Shiva from '../public/Images/Shiva.png';
import animationData from '../public/bg-animation.json';
import Lottie from 'lottie-react';
export default function YogaJourney() {
  return (
    <section className="px-6 sm:px-10 md:px-16 lg:px-36 xl:px-56 py-16 md:py-28 bg-white">
      <div className="absolute md:-left-[20%] w-[40%] -right-[15%]  opacity-30 pointer-events-none">
        <Lottie animationData={animationData} loop autoplay />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-[32px] sm:text-[42px] md:text-[58px] font-medium leading-[44px] sm:leading-[56px] md:leading-[70px] tracking-tightest text-[#252324] mb-6">
            Welcome to Your <br/>
            Yoga Journey
          </h2>
          <p className="text-[#252324BF] comme-font text-base sm:text-[18px] leading-relaxed mb-6 max-w-md mx-auto md:mx-0">
            Watch their stories and see how our training empowered them with the
            skills, confidence, and support to succeed in the yoga industry.
            Whether you&apos;re looking to deepen your practice or start a professional
            journey, their experiences will inspire you to take the next step.
          </p>
          <button className="inline-flex items-center gap-3 text-[#252324] font-medium px-2 py-2 rounded-full transition hover:bg-[#BDFFE8]">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#CCAA1F] text-white text-[18px]">
              <FaArrowRightLong />
            </span>
            Start Your Yoga Journey Today
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={Shiva}
            alt="shiva"
            className="w-full max-w-sm md:max-w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
