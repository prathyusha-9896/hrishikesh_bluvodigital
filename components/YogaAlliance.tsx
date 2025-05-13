'use client';
import Image from "next/image";
import '../app/globals.css';
import profile from "../public/Images/profile.svg";
import Header from "./Header";
export default function YogaAlliance() {
    return (
      <section
        className="pb-20 text-center h-full w-full bg-cover bg-no-repeat bg-left"
        style={{ backgroundImage: 'url("/Images/Gray.png")' }}
      >
              <Header />

        <div className="max-w-4xl mx-auto space-y-[28px] px-[26px] md:px-4 pt-32">
          <div className="comme-font font-medium inline-block bg-[#BDFFE8] text-[#252324CC] px-4 py-1 rounded-full text-[12px] md:[14px] leading-6 mb-4">
            Yoga Alliance Accredited School
          </div>
          <h1 className="text-[38px] md:text-5xl font-bold leading-tight text-gray-900">
            Awaken Your <br className="md:hidden"/>
            True Self in the <br className="md:hidden"/>
             Birthplace of Yoga
          </h1>
          <p className="mt-4 text-gray-600 text-[12px] md:text-[18px] comme-font">
            Feel the timeless embrace of authentic yoga teachings <br className="md:hidden"/> in the spiritual heartland of Rishikesh. <br className="md:block hidden"/>
            <span className="font-bold">Join a community <br className="md:hidden"/>devoted to your inner peace and personal growth.</span>
          </p>
          <div className="mt-6 flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-6">
            {/* CTA Button */}
            <button className="bg-[#252324D9] text-white px-6 py-2 rounded-[8px] hover:bg-gray-900 text-sm md:text-base">
              Start Your Yoga Journey
            </button>

            {/* Profile + Rating */}
            <div className="flex items-center space-x-2">
              {/* Profile Stack */}
              <div className="flex -space-x-2">
                <Image src={profile} alt="Student 1" className="rounded-full border border-white" />
              </div>

              {/* Rating Text */}
              <div className="flex flex-col items-start">
                <Image src="/Images/fivestar.svg" width={80} height={16} alt="Rating" className="h-4" />
                <p className="text-xs text-gray-500 mt-1">Trusted by Students Globally</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  