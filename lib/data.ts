// All content lives here. Sourced from the resume.

export const profile = {
  name: "Rami Walid",
  first: "RAMI",
  last: "WALID",
  role: "Software Engineer",
  location: "New York City, New York",
  email: "ramiwalid5@pm.me",
  tagline: "I build fast, secure, beautifully crafted software — from AI agents to pixel-perfect interfaces.",
  about:
    "Computer Science student at NJIT (minor in Applied Statistics) and 2x NSF Scholar. I've shipped AI-agent tooling inside a payments security team at Fiserv, I research prompt-injection attacks on web-browsing agents, and I care a lot about interfaces that feel great to use.",
  resume: "/ramiwalid_resume.pdf",
};

export const aboutGroups: { title: string; points: string[] }[] = [
  {
    title: "Who I am",
    points: [
      "Computer Science student at NJIT with a minor in Applied Statistics",
      "Based in Newark, NJ, graduating May 2027",
      "Passionate about AI security, agentic systems, and polished frontends",
    ],
  },
  {
    title: "Education",
    points: [
      "B.S. Computer Science, New Jersey Institute of Technology (2024 — 2027)",
      "Coursework: Advanced Data Structures & Algorithms, Operating Systems, Computer Architecture, Advanced Database Design, Linux Programming in C",
      "2x NSF Scholar and member of the ACM Chapter at NJIT",
    ],
  },
  {
    title: "What I've done",
    points: [
      "Built an AI-agent vulnerability remediation tool at Fiserv across 12 core applications",
      "Cut Harness deployment time by 85%, saving 20 hours a week",
      "Researching indirect prompt injection in web-browsing AI agents at NJIT",
      "Shipped an AWS-hosted Java math extraction engine for NJIT students and faculty",
      "Building a full-stack credit card aggregator with Next.js, FastAPI and PostgreSQL",
    ],
  },
];

export const stats = [
  { value: 85, suffix: "%", label: "Faster deployments via Harness CI/CD" },
  { value: 300, suffix: "M+", label: "Payment transactions/day on the team I interned on" },
  { value: 90, suffix: "%", label: "Less manual analysis time with my extraction engine" },
  { value: 97, suffix: "K", prefix: "$", label: "Forecasted annual savings at Fiserv" },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/ramiwalid" },
  { label: "LinkedIn", href: "https://linkedin.com/in/ramiwalid" },
  { label: "Email", href: `mailto:${profile.email}` },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "Java", "C/C++", "SQL", "JavaScript", "TypeScript", "HTML/CSS", "Swift"] },
  { group: "Frontend & Web", items: ["React", "Next.js", "Vue.js", "Tailwind", "Bootstrap", "Node.js", "FastAPI", "Flask", "Spring Boot"] },
  { group: "AI / Agentic", items: ["LangGraph", "Promptfoo", "Playwright", "browser-use", "Agentic AI", "LLM Agents", "Pandas", "Machine Learning"] },
  { group: "Cloud & DevOps", items: ["AWS (EC2)", "Google Cloud", "Docker", "Git", "CI/CD", "Harness", "GitLab", "Linux/Bash"] },
  { group: "Concepts", items: ["AI Security", "Prompt Injection", "Red-Teaming", "RESTful APIs", "OOP", "Agile", "Software Testing"] },
];

export type Project = {
  title: string;
  kind: string;
  description: string;
  points: string[];
  tags: string[];
  period: string;
  href?: string;
};

export const projects: Project[] = [
  {
    title: "Credit Card Aggregator",
    kind: "Full-stack · Personal project",
    period: "Nov 2025 — Present",
    description: "A finance platform that consolidates multi-institution credit card data into one unified dashboard.",
    points: [
      "Improved user financial oversight by 40% with centralized tracking",
      "Secure FastAPI backend with OAuth2 and tokenized data pipelines",
      "Optimized React components, cutting re-renders by 25%",
    ],
    tags: ["Next.js", "TypeScript", "React", "Tailwind", "FastAPI", "PostgreSQL"],
    href: "https://github.com/ramiwalid",
  },
  {
    title: "Agentic Vulnerability Remediation",
    kind: "AI tooling · Fiserv",
    period: "Summer 2026",
    description: "An AI-agent system that ingests security scans and applies real code fixes across 12 core applications.",
    points: [
      "Integrates Fortify, Jira and GitLab to open tickets and merge requests automatically",
      "Cut compliance gaps from weeks to hours",
      "Projected 80% less manual effort inside a PCI DSS environment",
    ],
    tags: ["Java", "Spring Boot", "Maven", "AI Agents", "GitLab"],
  },
  {
    title: "Prompt-Injection Eval Framework",
    kind: "Research · NJIT",
    period: "Sep 2026 — Present",
    description: "A fully agentic framework that red-teams web-browsing AI agents against indirect prompt injection.",
    points: [
      "Deploys agents to live and local environments to probe adversarial content",
      "Reproducible harnesses and benchmarks built on Promptfoo",
      "Studies agent robustness across varied deployment conditions",
    ],
    tags: ["Python", "LangGraph", "Playwright", "browser-use", "Promptfoo"],
  },
  {
    title: "Math Extraction Engine",
    kind: "Research · NJIT",
    period: "Jan — May 2026",
    description: "A Java engine, hosted on AWS EC2, that parses complex equations out of source documents for students and faculty.",
    points: [
      "Cut manual analysis time by over 90%",
      "Refactored the test suite to reduce regressions",
      "Deployed department-wide on AWS EC2",
    ],
    tags: ["Java", "AWS EC2", "Testing"],
  },
];

export const experience = [
  {
    role: "Undergraduate Researcher",
    focus: "AI Security & Agentic Systems",
    org: "NJIT Ying Wu College of Computing",
    period: "Sep 2026 — Present",
    summary: "Architecting an agentic evaluation framework to study indirect prompt injection in web-browsing AI agents, with automated red-teaming pipelines and reproducible Promptfoo test suites.",
  },
  {
    role: "Software Engineer Intern",
    focus: "TransArmor Team",
    org: "Fiserv",
    period: "Jun — Aug 2026",
    summary: "Built an AI-agent vulnerability remediation tool, and automated CI/CD to cut Harness deployment time by 85% — saving 20 hours a week and a forecasted $97,200 a year.",
  },
  {
    role: "Undergraduate Researcher",
    focus: "Java Developer",
    org: "NJIT Ying Wu College of Computing",
    period: "Jan — May 2026",
    summary: "Shipped an AWS-hosted Java application with a math extraction engine, and refactored the automated testing suite for better coverage and reliability.",
  },
];

export const education = {
  school: "New Jersey Institute of Technology",
  degree: "B.S. Computer Science · Minor in Applied Statistics",
  period: "Sep 2024 — May 2027",
  coursework: [
    "Advanced Data Structures & Algorithms",
    "Intensive Programming in Linux (C)",
    "Advanced Database System Design",
    "Computer Architecture",
    "Operating Systems",
  ],
  honors: ["2x NSF Scholar", "ACM Chapter at NJIT"],
};
