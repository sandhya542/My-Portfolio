import { motion as Motion } from "framer-motion";
import Navbar from "./components/layout/Navbar";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import FooterSection from "./components/sections/FooterSection";
import HeroSection from "./components/sections/HeroSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import SkillsSection from "./components/sections/SkillsSection";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative overflow-x-clip">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <Motion.div
          animate={{ x: [0, 40, 0], y: [0, -24, 0] }}
          transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
          className="absolute left-[-6rem] top-20 h-72 w-72 rounded-full bg-sky-400/25 blur-3xl dark:bg-cyan-500/20"
        />
        <Motion.div
          animate={{ x: [0, -45, 0], y: [0, 25, 0] }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
          className="absolute right-[-5rem] top-52 h-72 w-72 rounded-full bg-emerald-300/25 blur-3xl dark:bg-emerald-500/20"
        />
      </div>

      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
}

export default App;
