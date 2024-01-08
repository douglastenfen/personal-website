import { Linkedin, Github, Instagram } from "lucide-react";

type SocialMediaType = {
  href: string;
  icon: React.ElementType;
  label: string;
};

const socialMedias: SocialMediaType[] = [
  {
    href: "https://www.linkedin.com/in/douglas-tenfen-de-oliveira/",
    icon: Linkedin,
    label: "Linkedin",
  },

  {
    href: "https://github.com/douglastenfen",
    icon: Github,
    label: "Github",
  },

  {
    href: "https://www.instagram.com/tdodouglas/",
    icon: Instagram,
    label: "Instagram",
  },
];

export default socialMedias;
