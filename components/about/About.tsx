import { NextPage } from "next";
import Image from "next/image";
import React from "react";

const About: NextPage = () => {
  return (
    <div id="about" className="p-10 pt-2 mb-10 w-full flex flex-col items-center justify-center">
      <span className="   text-4xl underline underline-offset-2 decoration-green-brand/40 decoration-wavy">
        go beyond with a remote software developer
      </span>
      <span className="flex sm:flex-col md:flex-row w-full md:min-h-[450px] relative md:items-center md:justify-end ">
        <span className="sm:w-full md:w-2/3 py-3 md:absolute md:left-0 md:flex md:justify-center  md:min-h-[600px] relative ">
          <Image
            layout="fill"
            objectFit="fill"
            src="/aboutpage.svg"
            alt="hero image"
          />
        </span>

        <p className="w-full md:w-1/2 my-5 text-xl  opacity-70 ">
          My name is Kariuki George Thuo. <br />
          I&apos;m a full a fullstack web developer.
          <br />
          I&apos;m intrigued with how complex problems can be broken down into
          smaller, simpler problems* and ofcourse smaller manageable solutions.
          Out of that, I developed a passion working with software to solve
          these small chunks and produce an atmost high quality solution.
        </p>
      </span>
    </div>
  );
};

export default About;
