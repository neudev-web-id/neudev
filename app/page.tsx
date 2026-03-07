import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import FastWork from "@/components/sections/FastWork";
import Process from "@/components/sections/Process";
import Portfolio from "@/components/sections/Portfolio";
import Testimonial from "@/components/sections/Testimonial";
import Pricing from "@/components/sections/Pricing";
import BottomCTA from "@/components/sections/BottomCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <TrustedBy />
        <FastWork />
        <Process />
        <Portfolio />
        <Testimonial />
        <Pricing />
        <BottomCTA />
      </main>
      <Footer />
    </>
  );
}
