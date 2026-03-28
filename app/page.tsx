import { AboutSection } from "@/components/home/AboutSection";
import { ContactSection } from "@/components/home/ContactSection";
import { FloatingButtons } from "@/components/home/FloatingButtons";
import { Footer } from "@/components/home/Footer";
import { GallerySection } from "@/components/home/GallerySection";
import { HeroSection } from "@/components/home/HeroSection";
import { MobileStickyBar } from "@/components/home/MobileStickyBar";
import { Navbar } from "@/components/home/Navbar";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { PageBackdrop } from "@/components/motion/PageBackdrop";

export default function Home() {
  return (
    <>
      <PageBackdrop />
      <div className="relative z-10 min-h-screen bg-transparent text-slate-100">
        <Navbar />
        <main className="pb-28 md:pb-10">
          <HeroSection />
          <ServicesSection />
          <GallerySection />
          <WhyChooseUsSection />
          <AboutSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
        <FloatingButtons />
        <MobileStickyBar />
      </div>
    </>
  );
}
