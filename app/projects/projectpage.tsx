"use client";

import ProjectCard from "@/components/projectcard";
import { Projects } from "@/constants/index";
import React from "react";

const Page = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-center bg-cover relative">
      <div className="absolute inset-0 bg-opacity-50" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-[90%] max-h-[90%] relative z-10">
        {Projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            text={project.text}
            image={project.src}
            sourcecode={project.sourcecode}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
