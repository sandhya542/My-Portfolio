export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const profile = {
  name: "Sandhya",
  title: "Full Stack Developer",
  tagline: "Building scalable and user-friendly applications",
  intro:
    "I design and deliver resilient digital products from concept to deployment, blending clean architecture with delightful user experiences.",
  location: "India",
  email: "kattasandhya189@gmail.com",
  linkedin: "https://www.linkedin.com/in/sandhya-rani-katta/",
  github: "https://github.com/sandhya542",
  resumeUrl: "/resume.pdf",
};

export const skillGroups = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", level: 92 },
      { name: "JavaScript", level: 90 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 84 },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "PostgreSQL", level: 86 },
      { name: "MongoDB", level: 78 },
    ],
  },
  {
    category: "Others",
    items: [
      { name: "Python", level: 72 },
      { name: "Deployment Tools", level: 80 },
    ],
  },
];

export const projects = [
  {
    title: "ScaleCart Commerce",
    description:
      "A production-ready e-commerce platform with role-based dashboards, optimized checkout, and inventory workflows.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Redis"],
    demo: "https://demo.scalecart.app",
    repo: "https://github.com/sandhya/scalecart",
  },
  {
    title: "OpsPulse Analytics",
    description:
      "Real-time operations analytics dashboard with event ingestion pipelines and actionable monitoring visualizations.",
    tech: ["React", "Node.js", "PostgreSQL", "WebSockets"],
    demo: "https://opspulse-demo.netlify.app",
    repo: "https://github.com/sandhya/opspulse",
  },
  {
    title: "CareConnect Mobile",
    description:
      "Cross-platform mobile-first experience for appointment and notifications management with secure API integrations.",
    tech: ["React", "Express", "MongoDB", "Firebase"],
    demo: "https://careconnect-showcase.vercel.app",
    repo: "https://github.com/sandhya/careconnect",
  },
  {
    title: "Freelance Studio CMS",
    description:
      "A content and client workflow suite built for freelancers to manage leads, proposals, and delivery timelines.",
    tech: ["React", "Node.js", "PostgreSQL", "Tailwind"],
    demo: "https://studio-cms-demo.pages.dev",
    repo: "https://github.com/sandhya/studio-cms",
  },
];

export const experiences = [
  {
    role: "Freelance Full Stack Developer",
    period: "2023 - Present",
    summary:
      "Delivered custom web applications for startups and small businesses, improving performance, reliability, and release speed.",
    highlights: [
      "Built and launched 8+ client-facing products with React and Node.js",
      "Reduced API response times by up to 35% through query and caching optimization",
      "Collaborated with designers and stakeholders to turn product ideas into shipped features",
    ],
  },
  {
    role: "Project-Based Developer",
    period: "2021 - 2023",
    summary:
      "Worked on end-to-end web and mobile projects, including architecture planning, implementation, testing, and deployment.",
    highlights: [
      "Implemented secure authentication and role-based access across multiple products",
      "Set up CI/CD workflows to improve release confidence and consistency",
      "Contributed to scalable database schema design in PostgreSQL and MongoDB",
    ],
  },
];
