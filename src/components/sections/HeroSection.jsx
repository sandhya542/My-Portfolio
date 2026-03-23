import { motion as Motion } from "framer-motion";
import { LuDownload, LuMail, LuRocket } from "react-icons/lu";
import { profile } from "../../data/portfolioData";
import SocialLinks from "../ui/SocialLinks";

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-28 md:pt-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="glass rounded-3xl p-8 md:p-12"
        >
          <p className="font-display text-sm uppercase tracking-[0.24em] text-sky-500 dark:text-sky-300">
            {profile.title}
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-tight text-slate-900 dark:text-slate-100 md:text-6xl">
            Hi, I am {profile.name}. Crafting high-impact products with modern
            full stack engineering.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand to-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5"
            >
              <LuRocket /> View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-brand hover:text-brand dark:border-slate-600 dark:text-slate-100"
            >
              <LuMail /> Contact Me
            </a>
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center gap-2 rounded-xl border border-transparent bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-300"
            >
              <LuDownload /> Download Resume
            </a>
          </div>

          <div className="mt-8 border-t border-slate-300/70 pt-6 dark:border-slate-700/70">
            <SocialLinks
              items={[
                { label: "GitHub", href: profile.github },
                { label: "LinkedIn", href: profile.linkedin },
                { label: "Email", href: `mailto:${profile.email}` },
              ]}
            />
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
