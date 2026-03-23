import { motion as Motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle
          eyebrow="About"
          title="Full stack mindset, product-first execution"
          subtitle="I specialize in designing, developing, and deploying scalable web and mobile applications with a focus on performance and maintainability."
        />

        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="glass grid gap-8 rounded-3xl p-8 md:grid-cols-3"
        >
          <article>
            <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-slate-100">
              Brief Introduction
            </h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Experienced in React.js, Node.js, Express.js, PostgreSQL, and
              JavaScript, with working knowledge of Python, MongoDB, and mobile
              app development.
            </p>
          </article>

          <article>
            <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-slate-100">
              Skills Summary
            </h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Strong in API design, responsive frontend architecture, scalable
              backend services, and database modeling for real-world business
              workflows.
            </p>
          </article>

          <article>
            <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-slate-100">
              Career Goal
            </h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Build meaningful products that solve hard problems, while
              partnering with teams and clients to transform ideas into reliable
              digital experiences.
            </p>
          </article>
        </Motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
