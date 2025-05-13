"use client";
import { useState, useEffect, useRef } from "react";
import { useDiscoverRishikesh } from "./useDiscoverRishikesh";
import '../../app/globals.css';

export default function DiscoverRishikesh() {
  const { sections } = useDiscoverRishikesh();
  const [activeId, setActiveId] = useState<string>(sections[0].id);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const containerRef = useRef<HTMLDivElement | null>(null);


  // Update active tab based on scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      let currentId = sections[0].id;

      for (const section of sections) {
        const el = sectionRefs.current[section.id];
        if (el) {
          const offsetTop = el.offsetTop;
          if (scrollTop >= offsetTop - 160) {
            currentId = section.id;
          }
        }
      }

      setActiveId(currentId);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <>
    <div className="">
<div className="flex flex-col md:flex-row px-4 md:px-56 py-10 md:py-28 h-screen">
      {/* Scrollable Content Wrapper */}
<div className=" w-fit mb-4 md:hidden block">
  <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#1a1a1a]">
    Discover Rishikesh
  </h2>
  <div className="h-[2px] w-full bg-[#C3AA45] mt-2" />
</div>


        {/* Sidebar */}
        <nav className='hidden md:block w-[35%] h-full overflow-y-auto sticky-container'>
          <div className='sticky top-0 bg-white'>
            <ul className="space-y-4">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={(e) => {
                      const el = sectionRefs.current[section.id];
                      const container = containerRef.current;
                      const buttonEl = (e.target as HTMLElement)?.closest("button");

                      if (el && buttonEl && container) {
                        const sidebarY = buttonEl.getBoundingClientRect().top;
                        const sectionY = el.getBoundingClientRect().top;
                        const offset = sectionY - sidebarY;
                        container.scrollBy({ top: offset, behavior: "smooth" });
                      }
                    }}
                    className={`group relative block w-fit text-left text-[16px] font-medium transition-colors duration-300 
                      ${activeId === section.id ? "text-[#252324]" : "text-[#252324BF] hover:text-[#252324]"}
                    `}
                  >
                    {section.title}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-[#C3AA45] transition-all duration-300 
                        ${activeId === section.id ? "w-full" : "w-0 group-hover:w-full"}
                      `}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Scrollable Content */}
<div
  ref={containerRef}
  className="w-full md:w-[65%] h-full overflow-y-auto space-y-10 md:space-y-20 scroll-container"
>


          {sections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              ref={(el) => {
                sectionRefs.current[section.id] = el;
              }}
            >
              <h2 className="font-medium text-[#252324] text-[20px] mb-4">
                {section.title}
              </h2>
              <p className="text-[#252324BF] text-[14px] font-normal comme-font leading-[26px] tracking-[-0.32px]">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    
    </>
  );
}
