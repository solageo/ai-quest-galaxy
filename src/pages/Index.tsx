import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import QuizSection from "@/components/QuizSection";
import MissionsSection from "@/components/MissionsSection";
import ProjectsSection from "@/components/ProjectsSection";
import TeachersSection from "@/components/TeachersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <QuizSection />
      <MissionsSection />
      <ProjectsSection />
      <TeachersSection />
      <Footer />
    </div>
  );
};

export default Index;
