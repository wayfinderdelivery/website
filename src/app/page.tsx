import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import VideoSection from "@/components/VideoSection";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Docs from "@/components/Docs";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { softwareAppJsonLd } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <VideoSection />
        <HowItWorks />
        <Pricing />
        <Docs />
      </main>
      <Footer />
      <JsonLd data={softwareAppJsonLd} />
    </>
  );
}
