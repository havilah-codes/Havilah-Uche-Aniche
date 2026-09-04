import Blobs from "@/components/Blobs";
import AboutSection from "@/components/AboutSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import BuildSection from "@/components/BuildSection";
import WritingSection from "@/components/WritingSection";
import CurrentlySection from "@/components/CurrentlySection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Blobs />
      <AboutSection />
      <FeaturedProjects />
      <BuildSection />
      <WritingSection />
      <CurrentlySection />
      <ContactSection />
    </>
  );
}