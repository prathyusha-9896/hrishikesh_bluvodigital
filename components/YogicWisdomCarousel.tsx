"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const masters = [
  {
    name: "Swami Rama Tirtha",
    image: "/Yogis/ShriRamakrishnaPramhansa.png",
  },
  {
    name: "Maharishi Patanjali",
    image: "/Yogis/MaharishiPatanjali.png",
  },
  {
    name: "Swami Veda Bharati",
    image: "/Yogis/SwamiVedaBharati.png",
  },
  {
    name: "Swami Rama",
    image: "/Yogis/SwamiRama.png",
  },
  {
    name: "Swami Vivekananda",
    image: "/Yogis/SwamiVivekananda.png",
  },
  {
    name: "Shri Ramana Maharshi",
    image: "/Yogis/ShriRamanaMaharshi.png",
  },
];

export default function YogicWisdomCarousel() {
  return (
    <section className="py-20 px-0 bg-white text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-medium text-black tracking-tightest mb-3">
          5000 Years of Yogic Wisdom
        </h2>
        <p className="text-[#ffffffB3] text-sm md:text-base">
          A timeless journey of yoga passed from master to disciple through generations.
        </p>
      </div>

      <Marquee gradient={false} speed={50} pauseOnHover={false}>
        {masters.concat(masters).map((master, idx) => (
          <div key={idx} className="flex flex-col  mx-2 w-[260px] shrink-0">
            <div className="w-full h-[338px] relative overflow-hidden">
              <Image
                src={master.image}
                alt={master.name}
                fill
                className="object-cover"
              />
            </div>
            <p className="text-black font-normal mt-3 text-[24px] leading-[45px] text-left">
              {master.name}
            </p>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
