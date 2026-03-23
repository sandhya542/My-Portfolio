import { motion as Motion } from "framer-motion";
import { LuMoonStar, LuSun } from "react-icons/lu";

const ThemeToggle = ({ theme, onToggle }) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Toggle dark and light theme"
      className="glass relative flex h-11 w-20 items-center rounded-full p-1 transition-transform duration-300 hover:scale-[1.02]"
    >
      <Motion.span
        layout
        transition={{ type: "spring", stiffness: 450, damping: 30 }}
        className="absolute h-9 w-9 rounded-full bg-gradient-to-br from-brand to-sky-400"
        style={{ left: theme === "dark" ? "2.7rem" : "0.25rem" }}
      />
      <span className="relative z-10 flex w-full items-center justify-between px-1 text-slate-700 dark:text-slate-100">
        <LuSun />
        <LuMoonStar />
      </span>
    </button>
  );
};

export default ThemeToggle;
