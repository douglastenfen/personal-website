import React from "react";
import socialMedias from "./data";

export default function Social() {
  return (
    <div className="mt-4 flex space-x-3">
      {socialMedias.map(({ href, icon: Icon, label }) => (
        <a
          href={href}
          key={label}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-200 ease-in-out hover:text-purple"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
