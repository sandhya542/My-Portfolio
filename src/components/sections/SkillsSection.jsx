import { FaDatabase, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { SiExpress, SiJavascript, SiMongodb, SiPostgresql } from "react-icons/si";
import { TbCloudUpload } from "react-icons/tb";
import { skillGroups } from "../../data/portfolioData";
import SectionTitle from "../ui/SectionTitle";
import SkillGroupCard from "../ui/SkillGroupCard";

const iconMap = {
  "React.js": FaReact,
  JavaScript: SiJavascript,
  "Node.js": FaNodeJs,
  "Express.js": SiExpress,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Python: FaPython,
  "Deployment Tools": TbCloudUpload,
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle
          eyebrow="Skills"
          title="Core technologies I use to ship reliable products"
          subtitle="A balanced stack across frontend, backend, databases, and deployment workflows."
        />

        <div className="mb-8 flex flex-wrap gap-3">
          {Object.entries(iconMap).map((entry) => {
            const label = entry[0];
            const IconComponent = entry[1];

            return (
            <span
              key={label}
              className="glass inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-slate-700 dark:text-slate-100"
            >
              <IconComponent className="text-brand" /> {label}
            </span>
            );
          })}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <SkillGroupCard key={group.category} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
