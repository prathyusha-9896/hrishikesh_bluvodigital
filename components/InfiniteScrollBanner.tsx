'use client';
import Marquee from 'react-fast-marquee';

export default function InfiniteScrollBanner() {
  return (
    <div className="w-full overflow-hidden bg-white">
      <Marquee speed={40} gradient={false} pauseOnHover={false}>
        <p
          className="
            font-medium
            whitespace-nowrap
            px-6 sm:px-10 md:px-12
            leading-[1.1]
            text-[80px] sm:text-[130px] md:text-[180px] lg:text-[220px] xl:text-[260px]
            text-[#C3AA45BF] h-[230px] overflow-hidden          "
        >
          Flow. Teach. Inspire.&nbsp;
        </p>
      </Marquee>
    </div>
  );
}
