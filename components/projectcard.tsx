"use client";
import React from "react";

interface Props {
  image: string;
  title: string;
  text: string;
  sourcecode: string;
}

const ProjectCard = ({ image, title, text, sourcecode }: Props) => {
  return (
    <div
      className="w-full max-w-[400px] h-[280px] rounded-md cursor-pointer bg-cover bg-center text-white p-4 relative"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-50" />
      <div className="relative z-10 flex flex-col gap-4 p-4">
        <h1 className="text-white text-2xl font-semibold">{title}</h1>
        <p className="text-gray-200 text-[18px]">{text}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
