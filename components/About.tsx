import type { NextPage } from "next";
import React from "react";
import AnimatedText from "./AnimatedText";

const About: NextPage = () => {
  return (
    <div id="about" className="w-full p-5 py-16">
      <AnimatedText
        text="About"
        className="text-lg sm:text-xl font-bold mb-8 text-green-brand"
      />

      <div className="space-y-4 text-lg text-gray-300 leading-relaxed max-w-3xl">
        <p>
          Hello! I'm Kariuki George — a Software Developer & Site Reliability
          Engineer passionate about building high-performance, scalable systems
          and creating intuitive user experiences.
        </p>

        <p>
          I'm a software developer (systems and web) and Rust enthusiast,
          currently working at{" "}
          <a
            href="https://www.safaricom.co.ke/"
            target="_blank"
            rel="noreferrer"
            className="text-green-brand hover:opacity-80 transition-opacity underline decoration-wavy"
          >
            Safaricom PLC
          </a>
          , where I contribute to observability platforms using Rust, eBPF, and
          distributed systems technologies.
        </p>

        <p>
          My current tools of work include Rust, Golang, and TypeScript. I enjoy
          working with modern web technologies, building scalable backend
          systems, and diving deep into Linux kernel programming. I also create
          educational content for developers, making complex concepts easier to
          understand through blog posts and tweets.
        </p>

        <p>
          Beyond work, I love exploring new technologies and turning ideas into
          reality through personal projects. I'm particularly interested in
          distributed systems, observability, and developer tooling.
        </p>
      </div>
    </div>
  );
};

export default About;
