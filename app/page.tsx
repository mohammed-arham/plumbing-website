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

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main>
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
  );
}
