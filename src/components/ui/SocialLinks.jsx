import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";

const iconMap = {
  GitHub: LuGithub,
  LinkedIn: LuLinkedin,
  Email: LuMail,
};

const SocialLinks = ({ items }) => {
  return (
    <div className="flex items-center gap-3">
      {items.map(({ label, href }) => {
        const Icon = iconMap[label];

        return (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto:") ? "_self" : "_blank"}
            rel="noreferrer"
            className="glass inline-flex h-11 w-11 items-center justify-center rounded-xl text-lg text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:text-brand dark:text-slate-100"
            aria-label={label}
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
