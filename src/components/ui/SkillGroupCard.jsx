import { motion as Motion } from "framer-motion";

const SkillGroupCard = ({ group, index }) => {
  return (
    <Motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
      className="glass rounded-2xl p-6"
    >
      <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-slate-100">
        {group.category}
      </h3>
      <div className="mt-5 space-y-4">
        {group.items.map((item) => (
          <div key={item.name}>
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                {item.name}
              </p>
              <p className="text-xs font-semibold text-brand">{item.level}%</p>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-300/70 dark:bg-slate-700/70">
              <Motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.level}%` }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-brand to-sky-400"
              />
            </div>
          </div>
        ))}
      </div>
    </Motion.article>
  );
};

export default SkillGroupCard;
