'use client';
import { useState } from 'react';
import { TfiArrowDown } from "react-icons/tfi";

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQS({ data }: { data: { TITLE: string; FAQS_LIST: FAQ[] } }) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    setOpenIndexes(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="bg-white px-6 sm:px-12 md:px-28 lg:px-56 py-0 sm:py-24 md:py-32">
      <h2 className="mb-12 sm:mb-16 md:mb-20 text-[32px] sm:text-[42px] md:text-[58px] leading-tight font-medium tracking-tight text-[#252324]">
        {data.TITLE}
      </h2>
      <div className="space-y-10 sm:space-y-12 md:space-y-16">
        {data.FAQS_LIST.map((faq, index) => {
          const isOpen = openIndexes.includes(index);
          return (
            <div key={index}>
              <div className="flex items-start justify-between w-full">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full text-left"
                >
                  <div
                    className={`text-[16px] sm:text-[17px] md:text-[18px] leading-[24px] sm:leading-[26px] tracking-[-0.88px] text-[#252324] font-medium ${
                      !isOpen ? 'border-b border-gray-300 pb-2' : ''
                    }`}
                  >
                    {faq.question}
                  </div>
                  <span
                    className={`ml-4 w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full border border-[#CCAA1F] transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  >
                    <TfiArrowDown size={12} color="#CCAA1F" />
                  </span>
                </button>
              </div>
              {isOpen && (
                <div className="comme-font mt-3 border-b border-gray-300 pb-4 text-[14px] sm:text-[15px] leading-[26px] sm:leading-[29.1px] text-[#252324bf] tracking-[-0.36px] max-w-[90%]">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
