import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import ScenarioGallery from "@/components/ScenarioGallery";
import DualAgentSection from "@/components/DualAgentSection";
import ClinicalValidation from "@/components/ClinicalValidation";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function Home() {
  return (
    <main>
      <ScrollAnimation />
      <Navbar />
      <Hero />
      <div className="editorial-divider" style={{ maxWidth: "var(--max-w)" }}></div>
      <ProblemStatement />
      <ScenarioGallery />
      <DualAgentSection />
      <ClinicalValidation />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
