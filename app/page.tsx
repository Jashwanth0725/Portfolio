"use client";
import Image from "next/image";
import Page from "./projects/projectpage";
import ContactPage from "./contact/contactpage";
import SkillsPage from "./skills/skillspage";
import Navbar from "@/components/navbar";

export default function Home() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="w-screen h-screen relative scroll-smooth">
      <div className="flex flex-col md:flex-row items-center justify-between w-full h-full bg-cover bg-center bg-gray-900 p-5 md:p-20">
        {/* Left Content */}
        <div className="flex flex-col gap-5 z-[10] max-w-[750px] text-center md:text-left">
          <h1 className="text-[40px] md:text-[50px] text-white font-semibold">
            Hello, I am <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              Jashwanth Sai Tandamalla
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block">
            IT Graduate | Full Stack Developer | Data Analysis Intern | Actively
            looking for a job opportunity
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-5">
            <button
              onClick={() => scrollToSection("my-skills")}
              className="rounded-[20px] bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              My Skills
            </button>
            <button
              onClick={() => scrollToSection("my-projects")}
              className="rounded-[20px] bg-transparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
            >
              My projects
            </button>
            <button
              onClick={() => scrollToSection("contact-me")}
              className="rounded-[20px] bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Contact me
            </button>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="mt-10 md:mt-0">
          <Image
            src="/Jashu.jpg"
            alt="Profile Picture"
            width={350}
            height={380}
            className="border-2 border-white rounded-full p-2"
          />
        </div>
      </div>

      {/* Sections to scroll to */}
      <section
        id="my-skills"
        className="h-screen bg-gray-900 text-white flex items-center justify-center"
      >
        <SkillsPage />
      </section>

      <section
        id="my-projects"
        className=" bg-gray-900 text-white flex flex-col items-center justify-center py-12"
      >
        <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>
        <div className="w-full">
          <Page />
        </div>
      </section>

      <section
        id="contact-me"
        className=" bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-16"
      >
        <h2 className="text-4xl font-bold text-blue-400 mb-8 text-center tracking-wide">
          Get in Touch
        </h2>
        <ContactPage />
      </section>

      <footer className="bg-gray-900 text-white py-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Jashwanth Sai Tandamalla. All rights
          reserved.
        </p>
      </footer>
    </main>
  );
}
