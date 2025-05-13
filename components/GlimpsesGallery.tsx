"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const imagesLeft = [
    "/Gallery/gallery1.jpg",
    "/Gallery/gallery5.jpg",
    "/Gallery/gallery4.jpg",
    "/Gallery/gallery3.jpg",
    "/Gallery/gallery2.jpg",
    "/Gallery/gallery7.jpg",
    "/Gallery/gallery5.jpg",
    "/Gallery/gallery8.jpg",
  ];
  
  const imagesMiddle = [
    "/Gallery/gallery1.jpg",
    "/Gallery/gallery5.jpg",
    "/Gallery/gallery4.jpg",
    "/Gallery/gallery3.jpg",
    "/Gallery/gallery2.jpg",
    "/Gallery/gallery7.jpg",
    "/Gallery/gallery5.jpg",
    "/Gallery/gallery8.jpg",
  ];
  
  const imagesRight = [
    "/Gallery/gallery1.jpg",
    "/Gallery/gallery5.jpg",
    "/Gallery/gallery4.jpg",
    "/Gallery/gallery3.jpg",
    "/Gallery/gallery2.jpg",
    "/Gallery/gallery7.jpg",
    "/Gallery/gallery5.jpg",
    "/Gallery/gallery8.jpg",
  ];

export default function GlimpsesGallery() {
  const leftRef = useRef<HTMLDivElement>(null!);
  const middleRef = useRef<HTMLDivElement>(null!);
  const rightRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const startScroll = (
        ref: React.RefObject<HTMLDivElement>,
        direction: "up" | "down"
      ) => {
        const container = ref.current;
        if (!container) return;
      
        let scrollAmount = 0;
        const speed = 0.5;
      
        const step = () => {
          if (!container) return;
      
          const scrollHeight = container.scrollHeight;
          const clientHeight = container.clientHeight;
          const maxScroll = scrollHeight - clientHeight;
      
          scrollAmount += direction === "down" ? speed : -speed;
      
          // Wrap scrollAmount around maxScroll for infinite loop
          if (scrollAmount > maxScroll) scrollAmount = 0;
          if (scrollAmount < 0) scrollAmount = maxScroll;
      
          container.scrollTop = scrollAmount;
          requestAnimationFrame(step);
        };
      
        requestAnimationFrame(step);
      };
      
    startScroll(leftRef, "up");
    startScroll(middleRef, "down"); // ✅ FIXED: was "up"
    startScroll(rightRef, "up");  // ✅ double-check this one
  }, []);

  const renderColumn = (
    images: string[],
    ref: React.RefObject<HTMLDivElement>,
    offset = 0
  ) => (
    <div ref={ref} className="h-[1120px] overflow-hidden relative">
      <div className="flex flex-col gap-y-4">
        {[...images, ...images].map((img, idx) => {
          const isTall = (idx + offset) % 2 === 0;
          const aspectClass = isTall ? "aspect-[3/4]" : "aspect-[4/3]";
  
          return (
            <div key={idx} className={`relative ${aspectClass}`}>
              <Image
                src={img}
                alt={`glimpse-${idx}`}
                className="object-cover w-full h-full"
                fill
              />
            </div>
          );
        })}
      </div>
    </div>
  );
  

  return (
              <section className="bg-white py-12 px-4 md:px-20 lg:px-56">
                <div className="w-full mx-auto">
                <div className="grid md:grid-cols-2 md:gap-20 gap-4 md:mb-12 mb-0">
                    {/* Left Side: Title */}
                    <div className="flex ">
                        <h3 className="text-black md:text-[48px] text-[40px] font-bold md:text-center text-left max-w-md">
                        Glimpses of Our <br /> Journey Together
                        </h3>
                    </div>
        
                    {/* Right Side: Description + Button */}
                    <div className="flex flex-col justify-center items-start max-w-xl">
                        <p className="text-gray-700 mb-4 comme-font ">
                        Discover the serene spaces, beautiful surroundings, and vibrant life at our yoga school. A visual journey into practice and learning.
                        </p>
                        <button className="inline-flex items-center gap-3 text-black comme-font text-[16px] leading-[30px] tracking-[-2%] font-medium px-2 py-2 rounded-full transition duration-300 hover:bg-[#BDFFE8]">
                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-600  text-white text-sm transition duration-300">
                        <FaArrowRightLong  />
                        </span>
                        View Full Gallery                       
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-[592px] md:h-[592px] lg:h-[1120px] overflow-hidden">
                {/* Left: hidden on mobile */}
                  <div className="hidden md:block">
                    {renderColumn(imagesLeft, leftRef, 0)}
                  </div>

                  {/* Middle: always visible */}
                  <div className="">
                    {renderColumn(imagesMiddle, middleRef, 1)}
                  </div>

                  {/* Right: hidden on mobile */}
                  <div className="hidden md:block">
                    {renderColumn(imagesRight, rightRef, 0)}
                  </div>
                </div>

                </div>
              </section>
  );
}
