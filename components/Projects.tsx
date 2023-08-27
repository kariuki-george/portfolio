import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { Badge } from "./ui/badge";

const Projects: NextPage = () => {
  return (
    <div id="projects" className=" w-full p-5 flex flex-col items-center ">
      <section className="text-4xl my-20 underline  decoration-green-brand decoration-wavy">
        previous work
      </section>

      <article className="flex flex-col gap-10 w-full">
        <section className="flex flex-col gap-3 border-b p-3 ">
          <h2 className="text-lg text-green-brand font-semibold">
            Senior Frontend Developer - Sellhustle
          </h2>
          <span className="flex gap-2">
            <Badge className="hover:text-green-brand">Remote</Badge>
            <Badge className="hover:text-green-brand">Nigeria</Badge>
            <Badge className="hover:text-green-brand">Jan 2022</Badge>
            <Badge className="hover:text-green-brand">Nov 2022</Badge>
          </span>
          <span>
            At Sellhustle I was leading the team in integrating and improving
            web applications.
            <br /> The work included but was not limited to integrating web apps
            with graphql APIs, coding new designs, and developing networking and
            deployment solutions for multitenant e-commerce architectures.
            <br /> I learned a lot, not only from working with new technologies
            but also working with a team, conceiving and discussing ideas, time
            management and finally putting all that into code.
          </span>
          <span className="flex gap-2 flex-wrap">
            <Badge className="hover:text-green-brand">NextJs</Badge>
            <Badge className="hover:text-green-brand">TailwindCss/ SCSS</Badge>
            <Badge className="hover:text-green-brand">Flutterwave</Badge>
            <Badge className="hover:text-green-brand">Apollo Graphql</Badge>
            <Badge className="hover:text-green-brand">Reduxjs/Toolkit</Badge>
            <Badge className="hover:text-green-brand">Jwt</Badge>
          </span>
        </section>
        <section className="flex flex-col gap-3 border-b p-3 ">
          <h2 className="text-lg text-green-brand font-semibold">
            Software Development and Technical Support Intern - State Department
            for Housing and Urban Planning
          </h2>
          <span className="flex gap-2">
            <Badge className="hover:text-green-brand">In Office</Badge>
            <Badge className="hover:text-green-brand">Kenya</Badge>
            <Badge className="hover:text-green-brand">Jun 2023</Badge>
            <Badge className="hover:text-green-brand">Aug 2023</Badge>
          </span>
          <span>
            Here, I worked in ICT department doubling as a support and a
            developer.
            <br />I was involved in developing:
            <br /> 1. A simple chatbot system for help and support <br />
            2. A leave management system <br />
            3. A GeoSpatial national database and supporting web application{" "}
            <br />
            4. Data cleaning and processing
          </span>
          <span className="flex gap-2 flex-wrap">
            <Badge>NextJs/ Vue</Badge>
            <Badge>TailwindCss/ ShadCn</Badge>
            <Badge>NestJs</Badge>
            <Badge>Postgres</Badge>
            <Badge>GeoSpatial Database</Badge>
            <Badge>Cloud Computing</Badge>
          </span>
        </section>
      </article>

      <section className="text-4xl my-20 underline  decoration-green-brand decoration-wavy">
        other projects
      </section>
      <article className="flex flex-col gap-10 w-full">
        <a href={"https://comms.p.kariukigeorge.me/"} target="_blank">
          <section className="flex flex-col gap-3 border-b p-3 ">
            <h2 className="text-lg text-green-brand font-semibold">
              Comms chat provider
            </h2>
            <section className="flex  flex-col items-center  md:flex-row  gap-6">
              <aside className="h-full w-1/3">
                <Image
                  alt="Comms image"
                  src="https://res.cloudinary.com/smiley-geek/image/upload/v1689241224/gzvfrwwfd9h3u8zm3roi.png"
                  height={200}
                  width={200}
                />
              </aside>
              <main className="h-full  w-full  flex flex-col gap-3">
                <span className="flex gap-2">
                  <Badge className="hover:text-green-brand">Intercom</Badge>
                  <Badge className="hover:text-green-brand">Tawk.to</Badge>
                  <Badge className="hover:text-green-brand">Messaging</Badge>
                </span>
                <span>
                  Comms creates modern Customer Service software that redefines
                  how businesses support their customers. This platform connects
                  businesses directly to customers using realtime messaging.
                  <br /> It enable teams to scale support without investing more
                  resources - leading to happier customers and more efficient
                  support teams.
                </span>
                <span className="flex gap-2 flex-wrap">
                  <Badge>NextJs</Badge>
                  <Badge>TailwindCss/ ShadCn</Badge>
                  <Badge>NestJs</Badge>
                  <Badge>Postgres</Badge>
                  <Badge>Websockets</Badge>
                  <Badge>Redis/ PubSub</Badge>
                  <Badge>Realtime Analytics</Badge>
                </span>
              </main>
            </section>
          </section>
        </a>
        <a href={"https://lms-web.p.kariukigeorge.me/"} target="_blank">
          <section className="flex flex-col gap-3 border-b p-3 ">
            <h2 className="text-lg text-green-brand font-semibold">
              Leave Management System
            </h2>
            <section className="flex flex-col items-center  md:flex-row gap-6">
              <aside className="h-full w-1/3">
                <Image
                  alt="LMS image"
                  src="https://res.cloudinary.com/smiley-geek/image/upload/v1692872326/wfayjhdmkbmf4ohdmvcn.png"
                  height={200}
                  width={200}
                />
              </aside>
              <main className="h-full  flex flex-col gap-3">
                <span className="flex gap-2">
                  <Badge className="hover:text-green-brand">LMS</Badge>
                  <Badge className="hover:text-green-brand">HR</Badge>
                  <Badge className="hover:text-green-brand">Leaves</Badge>
                </span>
                <span>
                  LMS is modern, paperless, intuitive, scalable and realtime HR
                  management service to manage user leaves.
                  <br /> It allows users to: <br />
                  1. Apply for leaves without all the paper work. <br />
                  2. Track your leaves <br />
                  3. Track coworkers leaves.
                  <br />
                </span>
                <span className="flex gap-2 flex-wrap">
                  <Badge>NextJs</Badge>
                  <Badge>TailwindCss/ ShadCn</Badge>
                  <Badge>NestJs</Badge>
                  <Badge>Postgres</Badge>
                  <Badge>Websockets</Badge>
                  <Badge>Redis/ PubSub</Badge>
                  <Badge>Realtime Analytics</Badge>
                </span>
              </main>
            </section>
          </section>
        </a>
      </article>
    </div>
  );
};

export default Projects;

interface IProject {
  name: string;
  imgUrl: string;
  link: string;
}
