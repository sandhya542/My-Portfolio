import { projects } from "../../data/portfolioData";
import ProjectCard from "../ui/ProjectCard";
import SectionTitle from "../ui/SectionTitle";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle
          eyebrow="Projects"
          title="Selected work solving real product and engineering problems"
          subtitle="A curated set of projects showcasing architecture, performance, and user-centric execution."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
