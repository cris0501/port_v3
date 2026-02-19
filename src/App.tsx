import { TronBackground } from "./components/TronBackground";
import { HeroSection } from "./components/HeroSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { TechStackSection } from "./components/TechStackSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";

function App() {
  return (
    <main className="relative">
      <TronBackground />
      <div className="relative z-10">
        <HeroSection />
        <ExperienceSection />
        <TechStackSection />
        <SkillsSection />
        <ProjectsSection />
      </div>
    </main>
  );
}

export default App;
