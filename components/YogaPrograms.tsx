"use client";
import Image from "next/image";
import { useState } from "react";
import calendar from "../public/Icons/calender.svg";
import bed from "../public/Icons/bed.svg";
import cert from "../public/Icons/cert.svg";
import taxi from "../public/Icons/taxi.svg";
import food from "../public/Icons/food.svg";
import animationData from '../public/bg-animation.json';
import Lottie from 'lottie-react';
export default function YogaPrograms() {
  const programs = [
    {
      level: "Beginner",
      title: "100 Hour Yoga Teacher Training Program",
      description:
        "Build a strong foundation in yoga practice, breathing, and philosophy. Ideal for beginners and self-growth.",
      price: 599,
      oldPrice: 799,
      upgradePrice: 100,
      image: "/Images/Yogaprogram1.svg",
      badgeColor: "bg-[#E6F4EA]",
      badgeText: "text-[#157347]",
      duration: "14 Days of Training",
    },
    {
      level: "Intermediate",
      title: "200 Hour Yoga Teacher Training Program",
      description:
        "Become a certified yoga teacher with complete training in asanas, teaching methods, and yogic tradition.",
      price: 999,
      oldPrice: 1499,
      upgradePrice: 200,
      image: "/Images/Yogaprogram2.svg",
      badgeColor: "bg-[#E3F2FD]",
      badgeText: "text-[#1E40AF]",
      duration: "27 Days of Training",
    },
    {
      level: "Advance",
      title: "300 Hour Yoga Teacher Training Program",
      description:
        "Deepen your practice and teaching with advanced asanas, pranayama, philosophy, and intelligent sequencing.",
      price: 1299,
      oldPrice: 1599,
      upgradePrice: 200,
      image: "/Images/Yogaprogram2.svg",
      badgeColor: "bg-[#FFF4E5]",
      badgeText: "text-[#C2410C]",
      duration: "27 Days of Training",
    },
  ];

  const features = [
    { label: "Food & Accommodation", icon: food },
    { label: "Sharing & Private Rooms", icon: bed },
    { label: "Free Airport Pickup", icon: taxi },
    { label: "Yoga Alliance Certification", icon: cert },
  ];

  const [upgrades, setUpgrades] = useState<{ [key: number]: boolean }>({});
  const [selectedTab, setSelectedTab] = useState(0);

  const renderCard = (program: typeof programs[0], idx: number) => {
    const isUpgraded = upgrades[idx] || false;
    const totalPrice = isUpgraded ? program.price + program.upgradePrice : program.price;
    const displayOldPrice = isUpgraded ? program.oldPrice + program.upgradePrice : program.oldPrice;

    return (
      <div key={idx} className="bg-white overflow-hidden relative">

        <div className="bg-[#FAF9F6CC]">
          <div className="relative">
            <Image src={program.image} alt={program.title} width={500} height={300} className="w-full h-[300px] object-cover" />
            <span className={`absolute top-0 right-0 text-xs px-3.5 py-2 comme-font font-medium ${program.badgeText} ${program.badgeColor}`}>
              {program.level}
            </span>
          </div>

          <div className="p-6 ">
            <h3 className="text-[18px] font-medium leading-[30px] mb-2 text-[#252324]">{program.title}</h3>
            <p className="text-[#252324BF] font-normal comme-font text-[11px] leading-relaxed mb-5">{program.description}</p>

            <div className="flex flex-wrap gap-2 mb-5 items-start">
              <span className="bg-[#F4F4F4] px-2 py-1 rounded-full flex items-center text-[9px] font-medium text-[#252324BF] comme-font gap-2">
                <Image src={calendar} alt="calender" /> {program.duration}
              </span>
              {features.map((feature, i) => (
                <span key={i} className="flex items-center bg-[#F4F4F4] rounded-full px-3 py-1 text-[9px] comme-font font-medium text-[#252324BF] gap-2">
                  <Image src={feature.icon} alt={feature.label} width={14} height={14} />
                  {feature.label}
                </span>
              ))}
            </div>

            <label className="flex items-center text-[10px] text-[#111827] comme-font font-normal space-x-2 mb-5">
              <input
                type="checkbox"
                className="accent-purple-700 w-4 h-4"
                checked={isUpgraded}
                onChange={() =>
                  setUpgrades((prev) => ({
                    ...prev,
                    [idx]: !prev[idx],
                  }))
                }
              />
              <span>Upgrade to Private Room (+${program.upgradePrice} USD)</span>
            </label>

            <div className="flex items-center gap-2">
              <button className="bg-[#FDC93B] text-black comme-font text-[14px] px-2 py-2 rounded-lg font-semibold hover:opacity-90 transition">
                Enroll Now – ${totalPrice}
              </button>
              <div className="flex flex-col">
                <span className="text-[10px] text-[#7C7C7C] font-medium">Old Price</span>
                <span className="text-[#7C7C7C] text-sm font-medium line-through">${displayOldPrice}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
<section className="relative py-20 px-6 sm:px-10 md:px-20 lg:px-56 bg-white overflow-hidden">
      <h2 className="text-center text-[#252324] text-[32px] sm:text-[42px] lg:text-[58px] font-ramillas font-medium leading-tight tracking-tighter mb-10">
        Yoga Teacher <br className="hidden lg:block" /> Training Programs
      </h2>
<div className="absolute -right-[25%] bottom-0 w-[40%] opacity-30 pointer-events-none">
  <Lottie animationData={animationData} loop autoplay />
</div>


      {/* Mobile Tab Switch */}
      <div className="flex lg:hidden justify-center gap-3 mb-8">
        {["100 Hour", "200 Hour", "300 Hour"].map((label, index) => (
          <button
            key={index}
            onClick={() => setSelectedTab(index)}
            className={`text-sm comme-font px-3 py-2 border rounded-lg ${
              selectedTab === index ? "bg-white text-[#FE9239] border-[#FE9239] font-semibold" : "text-[#252324BF] border-gray-300"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Mobile View */}
      <div className="lg:hidden">{renderCard(programs[selectedTab], selectedTab)}</div>

      {/* Desktop View */}
      <div className="hidden lg:grid md:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {programs.map((program, idx) => renderCard(program, idx))}
      </div>
    </section>
  );
}
