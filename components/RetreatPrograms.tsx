'use client';
import Image from 'next/image';

const programs = [
  {
    title: '3 Days Yoga Retreat',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '../Images/retreat1.svg',
    dates: ['May 24–26, 2025', 'June 21–23, 2025', 'July 19–21, 2025'],
    note: '*Only 20 seats available.'
  },
  {
    title: '5 Days Yoga Retreat',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '../Images/retreat2.svg',
    dates: ['June 10–14, 2025', 'July 8–12, 2025', 'August 5–9, 2025'],
    note: '*Only 20 seats available.'
  },
  {
    title: '7 Days Yoga Retreat',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '../Images/retreat3.svg',
    dates: ['June 1–7, 2025', 'July 1–7, 2025', 'August 15–21, 2025'],
    note: '*Only 20 seats available.'
  },
  {
    title: '10 Days Yoga Retreat',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '../Images/retreat4.svg',
    dates: ['June 20–29, 2025', 'July 15–24, 2025', 'August 10–19, 2025'],
    note: '*Limited to 15 participants. Early bird discount till June 5.'
  },
  {
    title: '14 Days Yoga Retreat',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '../Images/retreat5.svg',
    dates: ['June 5–18, 2025', 'July 5–18, 2025', 'August 1–14, 2025'],
    note: '*Limited to 18 students. Early bird ends May 20.'
  }
];

export default function RetreatPrograms() {
  return (
    <section className="md:px-56 px-6 py-20 mt-10 bg-[#FAF9F6] ">
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between items-center mb-12 flex-col md:flex-row gap-6">
          <h2 className="text-3xl md:text-4xl text-left font-medium text-[#252324]">
            Explore Our Short-Term <br className="hidden md:block" /> Retreat Programs
          </h2>
          <p className="text-[#252324B3] max-w-xl text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
          </p>
        </div>

        <div className="flex hidden md:block md:grid md:grid-cols-3 gap-6 mb-10 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
        {programs.slice(0, 3).map((program, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-md overflow-hidden flex-shrink-0 w-[85%] snap-start md:w-auto"
          >
              <div className="w-full h-64 relative">
                <Image src={program.image} alt={program.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#252324] mb-2">{program.title}</h3>
                <p className="text-sm text-[#252324B3] mb-4">{program.description}</p>
                <ul className="space-y-2 text-sm text-[#252324]">
                {program.dates.map((date, i) => (
                    <li
                    key={i}
                    className="border rounded-md px-3 py-2 flex items-center justify-between bg-[#fffff] hover:bg-[#FFFAF2]"
                    >
                    <span>{date}</span>
                    <input
                        type="checkbox"
                        name={`date-${idx}-${i}`}
                        className="w-5 h-5 border border-gray-300 rounded-md bg-white text-yellow-500 focus:ring-yellow-500"
                    />
                    </li>
                ))}
                </ul>

                <button className="mt-4 bg-yellow-500 text-white w-full py-2 rounded font-semibold hover:opacity-90 transition">
                  Enquire Now
                </button>
                <p className="text-[10px] font-medium comme-font text-[#252324B3] mt-2">{program.note}</p>
              </div>
            </div>
          ))}
        </div>
        {/*Mobile view */}
        <div className="md:hidden block flex md:grid md:grid-cols-3 gap-6 mb-10 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          {programs.map((program, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-md overflow-hidden flex-shrink-0 w-[85%] snap-start md:w-auto"
            >
              <div className="w-full h-64 relative">
                <Image src={program.image} alt={program.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#252324] mb-2">{program.title}</h3>
                <p className="text-sm text-[#252324B3] mb-4">{program.description}</p>
                <ul className="space-y-2 text-sm text-[#252324]">
                  {program.dates.map((date, i) => (
                    <li
                      key={i}
                      className="border rounded-md px-3 py-2 flex items-center justify-between bg-[#fffff] hover:bg-[#FFFAF2]"
                    >
                      <span>{date}</span>
                      <input
                        type="checkbox"
                        name={`date-${idx}-${i}`}
                        className="w-5 h-5 border border-gray-300 rounded-md bg-white text-yellow-500 focus:ring-yellow-500"
                      />
                    </li>
                  ))}
                </ul>
                <button className="mt-4 bg-yellow-500 text-white w-full py-2 rounded font-semibold hover:opacity-90 transition">
                  Enquire Now
                </button>
                <p className="text-[10px] font-medium comme-font text-[#252324B3] mt-2">{program.note}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Second row with only 2 cards centered */}
        <div className='hidden md:block'>
        <div className=" flex justify-center gap-6 flex-wrap">
          {programs.slice(3).map((program, idx) => (
            <div key={idx} className="w-full md:w-[350px] bg-white shadow-md rounded-md overflow-hidden">
              <div className="w-full h-64 relative">
                <Image src={program.image} alt={program.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#252324] mb-2">{program.title}</h3>
                <p className="text-sm text-[#252324B3] mb-4">{program.description}</p>
                <ul className="space-y-2 text-sm text-[#252324]">
                  {program.dates.map((date, i) => (
                    <li key={i} className="border rounded px-3 py-2 flex items-center justify-between">
                      <span>{date}</span>
                      <input type="radio" name={`date-bottom-${idx}`} className="accent-yellow-500" />
                    </li>
                  ))}
                </ul>
                <button className="mt-4 bg-yellow-500 text-white w-full py-2 rounded font-semibold hover:opacity-90 transition">
                  Enquire Now
                </button>
                <p className="text-[10px] font-medium comme-font text-[#252324B3] mt-2">{program.note}</p>
              </div>
            </div>
          ))}
        </div>
        </div>

      </div>
    </section>
  );
}
