import { motion as Motion } from "framer-motion";
import { LuArrowUpRight, LuGithub } from "react-icons/lu";

const ProjectCard = ({ project, index }) => {
  return (
    <Motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.48, delay: index * 0.06, ease: "easeOut" }}
      className="glass group rounded-2xl p-6"
    >
      <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-slate-100">
        {project.title}
      </h3>
      <p className="mt-3 text-slate-600 dark:text-slate-300">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((stack) => (
          <span
            key={stack}
            className="rounded-full border border-slate-300/70 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-500/70 dark:text-slate-200"
          >
            {stack}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-4">
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-sky-500"
        >
          Live Demo <LuArrowUpRight />
        </a>
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors hover:text-brand dark:text-slate-200"
        >
          GitHub <LuGithub />
        </a>
      </div>
    </Motion.article>
  );
};

export default ProjectCard;
