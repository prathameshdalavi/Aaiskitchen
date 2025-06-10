import { HeroSection } from "../components/home/HeroSection";
import { Footer } from "../components/layout/footer";
import { Navbar } from "../components/layout/Navbar";
import { OurStorySection } from "../components/home/OurStorySection";
import { WeSawSection } from "../components/home/WeSawSection";
import { WeSolveSection } from "../components/home/WeSolveSection";
import { TeamSection } from "../components/home/TeamSection";
import { ContactUsSection } from "../components/home/contactus";

export const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9f0]">
      <Navbar />
      <div className="flex-grow">
        <HeroSection />
        <OurStorySection />
        <WeSawSection />
        <WeSolveSection/>
        <TeamSection/>
        <ContactUsSection/>
      </div>
      <Footer />
    </div>
  );
};
