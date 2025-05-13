'use client';
import Image from "next/image";
import FooterLogo from "@/public/FooterLogo.svg";
import { TfiArrowRight } from "react-icons/tfi";
export default function Footer() {
    return (
      <footer className="bg-[#FCFCF8] text-[#3F3F3F] px-6 md:px-64 pt-24 pb-12 text-center">
        <div className="flex flex-col items-center">
          <Image src={FooterLogo} alt=""/>
          <h2 className="pt-[48px] text-[32px] md:text-[40px] font-semibold leading-tight">
            Train & Teach Worldwide <br className="hidden md:block" />
            with Our Globally Recognized Certification
          </h2>
  
          <button className="mt-6 flex items-center gap-3 px-2 py-3 rounded-full text-[#252324] comme-font font-medium text-lg hover:bg-[#BDFFE8]">
            <span className="w-9 h-9 rounded-full bg-[#CCAA1F] flex items-center justify-center">
              <span className="text-white text-lg"><TfiArrowRight /></span>
            </span>
            Start Your Journey Today!
          </button>
        </div>
  
        <hr className="my-12 border-gray-300" />
  
        <nav className="flex flex-wrap justify-center gap-8 font-medium comme-font text-[#252324] mb-4">
          <a href="#">About</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Courses</a>
          <a href="#">Contact</a>
        </nav>
  
        <p className="text-sm comme-font text-[#3F3F3F]">
          Copyright © 2025 Hrishikesh Yoga Vidya School
        </p>
      </footer>
    );
  }
  