import { Linkedin, Github, Instagram } from "lucide-react";
import React from "react";
import socialMedias from "./data";

export default function Social() {
  return (
    <div className="flex space-x-3">
      {socialMedias.map(({ href, icon: Icon, label }) => (
        <a href={href} key={label} target="_blank" rel="noopener noreferrer">
          <Icon />
        </a>
      ))}
    </div>
  );
}