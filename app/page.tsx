import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import WorkWithUs from "@/components/sections/WorkWithUs";
import FastWork from "@/components/sections/FastWork";
import TrustedPeople from "@/components/sections/TrustedPeople";
import Portfolio from "@/components/sections/Portfolio";
import UIDesignGallery from "@/components/sections/UIDesignGallery";
import Testimonial from "@/components/sections/Testimonial";
import BottomCTA from "@/components/sections/BottomCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <TrustedBy />
        <WorkWithUs />
        <FastWork />
        <TrustedPeople />
        <Portfolio />
        <UIDesignGallery />
        <Testimonial />
        <BottomCTA />
      </main>
      <Footer />
    </>
  );
}
