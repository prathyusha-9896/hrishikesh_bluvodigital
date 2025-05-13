'use client';
import dynamic from 'next/dynamic';

const AlumniExperiences = dynamic(() => import('@/components/AlumniExperiences'), { ssr: false });
const Community = dynamic(() => import('@/components/Community'), { ssr: false });
const CuriousToExplore = dynamic(() => import('@/components/CuriousToExplore'), { ssr: false });
const DiscoverRishikesh = dynamic(() => import('@/components/discoverrishikesh/DiscoverRishikesh'), { ssr: false });
const GlimpsesGallery = dynamic(() => import('@/components/GlimpsesGallery'), { ssr: false });
const ImageShowcase = dynamic(() => import('@/components/ImageShowcase'), { ssr: false });
const InfiniteScrollBanner = dynamic(() => import('@/components/InfiniteScrollBanner'), { ssr: false });
const ProudlyCertified = dynamic(() => import('@/components/proudlycertified/ProudlyCertified'), { ssr: false });
const RetreatPrograms = dynamic(() => import('@/components/RetreatPrograms'), { ssr: false });
const YogaAlliance = dynamic(() => import('@/components/YogaAlliance'), { ssr: false });
const YogaJourney = dynamic(() => import('@/components/YogaJourney'), { ssr: false });
const YogaPrograms = dynamic(() => import('@/components/YogaPrograms'), { ssr: false });
const YogicWisdomCarousel = dynamic(() => import('@/components/YogicWisdomCarousel'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });
const Faqs = dynamic(() => import('@/components/Faqs'), { ssr: false });

export default function Home() {
  return (
    <>
      <main>
        <YogaAlliance />
        <ImageShowcase />
        <ProudlyCertified/>
        <YogaJourney/>
        <YogaPrograms/>
        <CuriousToExplore/>
        <RetreatPrograms/>
        <YogicWisdomCarousel/>
        <AlumniExperiences/>
        <GlimpsesGallery/>
        <Community/>
        <DiscoverRishikesh/>
        <InfiniteScrollBanner/>
        <Footer/>
        <Faqs/>
        {/* Add more sections here */}
      </main>
    </>
  );
}
