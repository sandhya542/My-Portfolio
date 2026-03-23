import { motion as Motion } from "framer-motion";
import { navItems, profile } from "../../data/portfolioData";
import ThemeToggle from "../ui/ThemeToggle";

const Navbar = ({ theme, onToggleTheme }) => {
  return (
    <Motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/65"
    >
      <nav className="mx-auto w-full max-w-6xl px-4 py-3 md:px-6">
        <div className="flex items-center justify-between">
        <a href="#home" className="font-display text-lg font-bold text-gradient">
          {profile.name}
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-sm font-medium text-slate-700 transition-colors hover:text-brand dark:text-slate-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>

        <ul className="mt-3 flex gap-4 overflow-x-auto pb-1 text-sm md:hidden">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="whitespace-nowrap text-slate-700 transition-colors hover:text-brand dark:text-slate-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </Motion.header>
  );
};

export default Navbar;
