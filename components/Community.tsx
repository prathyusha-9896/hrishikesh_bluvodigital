'use client';
import '../app/globals.css';
import { FaArrowRightLong } from "react-icons/fa6";
import Image from 'next/image';
import leftone from '../public/Community/leftone.png'
import lefttwo from '../public/Community/lefttwo.png'
import left_three from '../public/Community/left_three.png'
import left_four from '../public/Community/left_four.png'
import left_five from '../public/Community/left_five.png'
import right_one from '../public/Community/right_one.png'
import right_two from '../public/Community/right_two.png'
import right_three from '../public/Community/right_three.png'
import right_four from '../public/Community/right_four.png'
import right_five from '../public/Community/right_five.png'

export default function Community() {
    return (
<>
  {/* Desktop version: visible from 1024px and above */}
  {/*<section
    className="hidden lg:block pt-16 lg:pt-32 pb-10 lg:pb-20 text-center w-full bg-cover bg-no-repeat bg-left"
    style={{
      backgroundImage: 'url("/Community.svg")',
      minHeight: '60vh',
    }}
  >
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-2xl lg:text-5xl font-medium tracking-[-4%] leading-[40px] lg:leading-[70px] text-gray-900">
        Join to the community
      </h1>
      <div className="mt-4 lg:mt-6 flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-4">
        <button className="bg-[#252324D9] text-white px-4 lg:px-6 py-2 rounded-[8px] hover:bg-gray-900">
          Start Your Yoga Journey
        </button>
        <button className="inline-flex items-center gap-3 text-black comme-font text-[14px] lg:text-[16px] leading-[24px] lg:leading-[30px] tracking-[-2%] font-medium px-2 py-2 rounded-full transition duration-300 hover:bg-[#BDFFE8]">
          <span className="w-6 lg:w-8 h-6 lg:h-8 flex items-center justify-center rounded-full bg-yellow-600 text-white text-sm transition duration-300">
            <FaArrowRightLong />
          </span>
          View Full Gallery
        </button>
      </div>
    </div>
  </section>

  {/* Mobile & tablet version: visible below 1024px */}
  {/*<div className="bg-[#2523240F]">
    <section
      className="block lg:hidden flex flex-col items-center justify-center pt-16 pb-10 text-center w-full bg-cover bg-no-repeat bg-left"
      style={{
        backgroundImage: 'url("/communitymobile.png")',
        minHeight: '60vh',
      }}
    >
      <div className="max-w-xl mx-auto px-4">
        <h1 className="text-2xl font-medium tracking-[-4%] leading-[40px] text-gray-900">
          Join to the community
        </h1>
        <div className="mt-4 flex flex-col items-center justify-center space-y-4">
          <button className="bg-[#252324D9] text-white px-4 py-2 rounded-[8px] hover:bg-gray-900">
            Start Your Yoga Journey
          </button>
          <button className="inline-flex items-center gap-3 text-black comme-font text-[14px] leading-[24px] tracking-[-2%] font-medium px-2 py-2 rounded-full transition duration-300 hover:bg-[#BDFFE8]">
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-yellow-600 text-white text-sm transition duration-300">
              <FaArrowRightLong />
            </span>
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  </div>*/}
<section className="relative w-full min-h-[65vh] bg-[rgba(37,35,36,0.06)] text-white overflow-hidden px-4 py-16 flex items-center justify-center text-center">
  {/* Absolute Positioned Images */}
  <Image src={leftone} className="absolute md:top-[25%] top-[13%] lg:w-64 lg:h-44 w-24 h-20 left-0 object-cover " alt="person 1" />
  <Image src={lefttwo} className="absolute md:top-0 -top-4 left-[10%] lg:w-24 lg:h-24 w-14 h-14 object-cover " alt="person 2" />
  <Image src={left_three} className="absolute top-0 left-[30%] lg:w-64 lg:h-36 w-14 h-14 object-cover " alt="person 3" />
  <Image src={left_four} className="absolute left-1/3 -bottom-6 lg:w-36 lg:h-40 w-14 h-16 object-cover" alt="person 4" />
  <Image src={left_five} className="absolute bottom-8 left-16 lg:w-24 lg:h-24 h-12 w-12 object-cover " alt="person 5" />
  <Image src={right_one} className="absolute top-0 right-0 lg:w-48 lg:h-36 w-20 h-14 object-cover " alt="person 6" />
  <Image src={right_two} className="absolute -top-6 right-[25%] lg:w-24 lg:h-24 w-12 h-12 object-cover " alt="person 7" />
  <Image src={right_three} className="hidden md:block absolute bottom-8 right-[25%] lg:w-24 lg:h-24 w-12 h-12 object-cover " alt="person 8" />
  <Image src={right_four} className="absolute top-[40%] right-4 lg:w-36 lg:h-36 w-12 h-12 object-cover " alt="person 9" />
  <Image src={right_five} className="absolute bottom-0 right-16 lg:w-52 lg:h-36 w-24 h-24 object-cover " alt="person 10" />


  {/* Center Content */}
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-2xl lg:text-5xl font-medium tracking-[-4%] leading-[40px] lg:leading-[70px] text-gray-900">
        Join to the community
      </h1>
      <div className="mt-4 lg:mt-6 flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-4">
        <button className="bg-[#252324D9] text-white px-4 lg:px-6 py-2 rounded-[8px] hover:bg-gray-900">
          Start Your Yoga Journey
        </button>
        <button className="inline-flex items-center gap-3 text-black comme-font text-[14px] lg:text-[16px] leading-[24px] lg:leading-[30px] tracking-[-2%] font-medium px-2 py-2 rounded-full transition duration-300 hover:bg-[#BDFFE8]">
          <span className="w-6 lg:w-8 h-6 lg:h-8 flex items-center justify-center rounded-full bg-yellow-600 text-white text-sm transition duration-300">
            <FaArrowRightLong />
          </span>
          View Full Gallery
        </button>
      </div>
    </div>
</section>

</>

    );
  }
