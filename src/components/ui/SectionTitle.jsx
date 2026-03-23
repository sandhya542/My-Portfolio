import { motion as Motion } from "framer-motion";

const SectionTitle = ({ eyebrow, title, subtitle }) => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="mb-10"
    >
      <p className="font-display text-sm uppercase tracking-[0.22em] text-sky-500 dark:text-sky-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-slate-900 dark:text-slate-100 md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">{subtitle}</p>
      )}
    </Motion.div>
  );
};

export default SectionTitle;
