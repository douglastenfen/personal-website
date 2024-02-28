import { Code, Database, Cloud, FileCode2 } from "lucide-react";

type Skill = {
  icon: React.ElementType;
  key: string;
  description: string;
};

const skills: Skill[] = [
  {
    icon: Code,
    key: "Languages",
    description: "JavaScript, TypeScript, Bash, SQL.",
  },
  {
    icon: Database,
    key: "Database",
    description: "PostgreSQL, SQLServer, MySQL, MongoDB.",
  },
  {
    icon: Cloud,
    key: "Cloud",
    description: "Docker, GitHub Actions, BitBucket Pipelines.",
  },
  {
    icon: FileCode2,
    key: "Frontend",
    description: "HTML, CSS, Tailwind, Next.js.",
  },
];

export default skills;
