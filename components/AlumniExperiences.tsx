"use client";
import Image from "next/image";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Regine",
    country: "United States",
    title: "Highly recommended",
    content:
      "Within one month, we had a solid foundation of yoga theory. We learned proper techniques and taught classes. Highly recommended for a holistic approach to yoga. The staff was accommodating, rooms cozy and clean, with full meals and excursions. I felt welcomed!!",
    image: "/Regine.png",
  },
  {
    name: "Claire Herrero",
    country: "India",
    title: "Wonderful experience",
    content:
      "This school is great. The teachers are friendly, and the teaching is of good quality. I recommend this school because it is a great place to grow personally and professionally. When I arrived, I spoke very little English, but after a month, I spoke much better and even made jokes. This place is wonderful!",
    image: "/ClaireHerrero.png",
  },
];

export default function AlumniExperiences() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="px-4 md:pl-56 py-20 bg-white">
      <div className="flex flex-col md:grid md:grid-cols-[35%_65%] items-start gap-4">
        {/* Left Column: Header */}
        <div className="pr-6">
          <h2 className="md:text-[42px] text-[30px] leading-[52px] text-center md:text-left tracking-[-4%] font-medium text-[#252324] mb-4">Alumni Experiences</h2>
          <p className="text-[#252324B3] text-center md:text-left comme-font text-[14px] mb-6 max-w-sm">
            Discover how Hrishikesh Yoga has touched lives around the world — one breath, one posture, one soul at a time.
          </p>
          <div className="flex items-center md:justify-start justify-center gap-6 mb-6">
            <div className="flex items-center gap-4">
              <Image src="/tripadvisor.png" alt="Tripadvisor" width={90} height={30} />
              <span className="text-sm font-semibold text-black">5.0</span>
              <Image src="/googleratings.png" alt="5 stars" width={90} height={20} />
            </div>
          </div>

          {/* Arrows */}
          <div className="md:block hidden">
          <div className="flex gap-4">
            <button onClick={prev} className="w-10 h-10 rounded-full bg-[#E6D691] flex items-center justify-center">
              <FaArrowLeft className="text-white" />
            </button>
            <button onClick={next} className="w-10 h-10 rounded-full bg-[#E6D691] flex items-center justify-center">
              <FaArrowRight className="text-white" />
            </button>
          </div>
          </div>
        </div>

        {/* Right Column: Testimonials */}
        <div className="flex gap-4 md:gap-6 overflow-x-auto md:overflow-hidden snap-x snap-mandatory">
        {[0, 1].map((offset) => {
            const index = (current + offset) % reviews.length;
            const review = reviews[index];
            return (
              <div
                key={index}
                className="bg-[#FAF9F6] p-6 md:p-8 w-full md:w-[538px] flex-shrink-0 snap-start"
              >
                <div className="flex text-yellow-500 text-lg mb-2">
                  {[...Array(5)].map((_, j) => (
                    <FaStar key={j} />
                  ))}
                </div>
                <h3 className="text-xl leading-[34px] tracking-[-2%] font-medium text-[#252324] mb-4">
                  {review.title}
                </h3>
                <p className="text-[#252324B3] text-[14px] italic leading-[26px] mb-6">
                &quot;{review.content}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="text-[#252324] font-medium">{review.name}</p>
                    <p className="text-xs comme-text text-[#252324B3]">{review.country}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
