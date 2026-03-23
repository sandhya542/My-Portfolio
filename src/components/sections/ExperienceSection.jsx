import { motion as Motion } from "framer-motion";
import { experiences } from "../../data/portfolioData";
import SectionTitle from "../ui/SectionTitle";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle
          eyebrow="Experience"
          title="Freelance and project-based delivery"
          subtitle="Hands-on execution across architecture, development, and deployment with measurable outcomes."
        />

        <div className="space-y-5">
          {experiences.map((experience, index) => (
            <Motion.article
              key={experience.role}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-slate-100">
                  {experience.role}
                </h3>
                <p className="text-sm font-semibold text-brand">
                  {experience.period}
                </p>
              </div>
              <p className="mt-3 text-slate-600 dark:text-slate-300">
                {experience.summary}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-200">
                {experience.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
