import { NextPage } from "next";
import React from "react";

const Projects: NextPage = () => {
  return (
    <div className=" w-full p-5 flex flex-col items-center">
      <section className="text-4xl my-5 underline  decoration-green-brand/40 decoration-wavy">
        previous work
      </section>
      <section className="w-full flex sm:flex-col md:flex-row md:flex-wrap items-center justify-center my-5">
        {projects.map((project) => (
          <a href={project.link} target="_blank" rel="noreferrer" className="sm:w-2/3  md:w-[400px]" key={project.name}>
            <li className="w-full decoration-none border rounded-md p-2 flex flex-col items-center">
              <img
                className="w-full md:object-cover"
                src={project.imgUrl}
                alt=""
              />
              <span className="text-xl">{project.name}</span>
            </li>
          </a>
        ))}
      </section>
    </div>
  );
};

export default Projects;

const projects = [
  {
    name: "cat wiki",
    imgUrl:
      "https://res.cloudinary.com/smiley-geek/image/upload/v1651413042/oukhdzok0msluuhnxlfi.png",
    link: "https://catwikibythuo.vercel.app",
  },
];
