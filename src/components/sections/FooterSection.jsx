import { profile } from "../../data/portfolioData";

const FooterSection = () => {
  return (
    <footer className="border-t border-slate-300/70 py-8 dark:border-slate-800/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-4 text-center text-sm text-slate-600 dark:text-slate-300 md:flex-row md:px-6 md:text-left">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p>Designed and developed with React, Tailwind CSS, and Framer Motion.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
