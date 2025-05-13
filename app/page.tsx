'use client';
import AlumniExperiences from '@/components/AlumniExperiences';
import Community from '@/components/Community';
import CuriousToExplore from '@/components/CuriousToExplore';
import DiscoverRishikesh from '@/components/discoverrishikesh/DiscoverRishikesh';
import GlimpsesGallery from '@/components/GlimpsesGallery';
//import Header from '@/components/Header';
import ImageShowcase from '@/components/ImageShowcase';
import InfiniteScrollBanner from '@/components/InfiniteScrollBanner';
import ProudlyCertified from '@/components/proudlycertified/ProudlyCertified';
import RetreatPrograms from '@/components/RetreatPrograms';
import HeroSection from '@/components/YogaAlliance';
import YogaJourney from '@/components/YogaJourney';
import YogaPrograms from '@/components/YogaPrograms';
import YogicWisdomCarousel from '@/components/YogicWisdomCarousel';
import FAQS from '@/components/faqs/FAQS';
import useFAQS from '@/components/faqs/useFAQS';
import Footer from '@/components/Footer';
export default function Home() {
  const data = useFAQS();
  return (
    <>
      <main>
        <HeroSection />
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
        <FAQS data={data} />
        <Footer/>
        {/* Add more sections here */}
      </main>
    </>
  );
}
