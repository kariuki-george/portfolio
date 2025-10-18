import { NextPage } from "next";
import Image from "next/image";
import React, { ReactNode } from "react";
import { Badge } from "./ui/badge";

const Projects: NextPage = () => {
  return (
    <div id="projects" className=" w-full p-5 flex flex-col items-center ">
      <section className="text-4xl my-20 underline  decoration-green-brand decoration-wavy">
        previous work
      </section>

      <article className="flex flex-col gap-10 w-full">
        {work.map((work, index) => (
          <section key={index} className="flex flex-col gap-3 border-b p-3 ">
            <h2 className="text-lg text-green-brand font-semibold">
              {work.title}
            </h2>
            <span className="flex gap-2">
              {work.projectBadges.map((badge, index) => (
                <Badge key={index} className="hover:text-green-brand">
                  {badge}
                </Badge>
              ))}
            </span>
            <section>{work.desc}</section>
            <span className="flex gap-2 flex-wrap">
              {work.techBadges.map((badge, index) => (
                <Badge key={index} className="hover:text-green-brand">
                  {badge}
                </Badge>
              ))}
            </span>
          </section>
        ))}
      </article>

      <section className="text-4xl my-20 underline  decoration-green-brand decoration-wavy">
        other projects
      </section>
      <article className="flex flex-col gap-10 w-full">
        {projects.map((project, index) => (
          <a key={index} href={project.link} target="_blank" rel="noreferrer">
            <section className="flex flex-col gap-3 border-b p-3 ">
              <h2 className="text-lg text-green-brand font-semibold">
                {project.title}
              </h2>
              <section className="flex flex-col items-center  md:flex-row gap-6">
                <aside className="h-full w-1/3">
                  <Image
                    alt={project.imgAlt}
                    src={project.imgUrl}
                    height={200}
                    width={200}
                    // Use a cleaner solution
                    className={index == 0 ? "bg-gray-200" : ""}
                  />
                </aside>
                <main className="h-full  flex flex-col gap-3">
                  <span className="flex gap-2">
                    {project.projectBadges.map((badge, index) => (
                      <Badge key={index} className="hover:text-green-brand">
                        {badge}
                      </Badge>
                    ))}
                  </span>
                  <section>{project.desc}</section>
                  <span className="flex gap-2 flex-wrap">
                    {project.techBadges.map((badge, index) => (
                      <Badge key={index} className="hover:text-green-brand">
                        {badge}
                      </Badge>
                    ))}
                  </span>
                </main>
              </section>
            </section>
          </a>
        ))}
      </article>
    </div>
  );
};

export default Projects;

let work: IProject[] = [
  {
    desc: (
      <span>
        At Service Availability, I
        <br />- Contribute to the development of an in-house observability
        platform. <br />- Develop rust-powered Ebpf programs for dynamic Linux
        kernel behavior. <br />- Develop pipelines to ship big data to Kafka and
        from Kafka to consumers.
      </span>
    ),
    imgAlt: "",
    imgUrl: "",
    link: "https://www.safaricom.co.ke/",
    projectBadges: ["Hybrid", "Nairobi", "April 2024", "Present"],
    techBadges: ["Rust", "Linux Kernel", "Ebpf", "Kafka", "Clickhouse"],
    title: "Service Availability Software Engineer - Safaricom PLC",
  },
  {
    desc: (
      <span>
        For my last year of Computer Science Degree, I worked with StimaBoda to
        <br />
        - Build a smart battery temperature analytics platform.
        <br />
        - Integrate with real-time APIs to poll new data from
        StimaMobility&apos;s Infrastructure.
        <br />- Integrate with ML APIs to get battery temperature predictions.
        <br />- Design and build a web platform with dashboards and analytics
        charts.
        <br />- Design and build a data aggregation, anomaly detection, and
        alerting system
      </span>
    ),
    imgAlt: "",
    imgUrl: "",
    link: "https://stimaboda.com/",
    projectBadges: ["University Project", "Nairobi", "Sept 2023", "April 2024"],
    techBadges: [
      "NextJs,",
      "TailwindCss/ SCSS",
      "Golang",
      "Machine Learning",
      "Api Integration",
      "Chartjs",
    ],
    title: "Software Developer - Stima Mobility",
  },

  {
    title:
      "Software Development and Technical Support Intern - State Department \n for Housing and Urban Planning",
    desc: (
      <span>
        Here, I worked in ICT department doubling as a support and a developer.
        <br />I was involved in developing:
        <br /> - A simple chatbot system for help and support <br />
        - A leave management system <br />
        - A GeoSpatial national database and supporting web application <br />-
        Data cleaning and processing
      </span>
    ),
    imgAlt: "",
    imgUrl: "",
    link: "",
    projectBadges: ["In Office", "Kenya", "Jun 2023", "Aug 2023"],
    techBadges: [
      "NextJs/ Vue",
      "TailwindCss/ ShadCn",
      "NestJs",
      "Postgres",
      "GeoSpatial Database",
      "Cloud Computing",
    ],
  },
  {
    desc: (
      <span>
        At Sellhustle I was leading the team in integrating and improving web
        applications.
        <br /> The work included but was not limited to integrating web apps
        with graphql APIs, coding new designs, and developing networking and
        deployment solutions for multitenant e-commerce architectures.
        <br /> I learned a lot, not only from working with new technologies but
        also working with a team, conceiving and discussing ideas, time
        management and finally putting all that into code.
      </span>
    ),
    imgAlt: "",
    imgUrl: "",
    link: "",
    projectBadges: ["Remote", "Nigeria", "Jan 2022", "Nov 2022"],
    techBadges: [
      "NextJs,",
      "TailwindCss/ SCSS",
      "Flutterwave",
      "Apollo Graphql",
      "Reduxjs/Toolkit",
      "Jwt",
    ],
    title: "Senior Frontend Developer - Sellhustle",
  },
];

let projects: IProject[] = [
  {
    desc: (
      <span>
        <strong>Tunnelicious</strong> — a lightweight HTTP traffic tunneling
        system that securely exposes your local or internal services to the
        internet over HTTPS.
        <br />
        Inspired by ngrok and Cloudflare Tunnels, it provides a simple
        agent–proxy architecture for fast, secure, and developer-friendly local
        access.
      </span>
    ),
    imgAlt: "tunnelicious logo",
    imgUrl:
      "https://i.pinimg.com/1200x/d4/1a/62/d41a629dd304ae1d5e03677c4a6b4c5f.jpg",
    link: "https://github.com/kariuki-george/tunnelicious",
    projectBadges: [
      "Distributed Systems",
      "Multithreading",
      "Tunneling",
      "Streaming",
      "Proxying",
    ],
    techBadges: ["Go", "HTTP/2", "gRPC", "Microservices", "Cloudflare Tunnels"],
    title: "Tunnelicious",
  },
  {
    desc: (
      <span>
        Solved the following distributed sytems challenges
        <br />
        1. Echo <br />
        2. Fault Tolerant Message Broadcast <br />
        3. Multi Node Unique Id Generation <br />
        4. Kafka-Style Log <br />
      </span>
    ),
    imgAlt: "gossipglomers logo",
    imgUrl: "https://fly.io/static/images/gossipers.webp",
    link: "https://github.com/kariuki-george/gossip-glomers",
    projectBadges: [
      "Distributed Systems",
      "Multithreading",
      "Consistency",
      "Availability",
      "Partition Tolerance",
    ],
    techBadges: ["Rust", "Tokio", "Golang", "IO", "Data Structures"],
    title: "Gossip Glomers Challenge",
  },
  {
    desc: (
      <span>
        A redis implementation for a subset of it &apos;s features
        <br />
        Supported Functionalities: <br />
        1. Ping <br />
        2. SET KEY VALUE <br />
        3. GET KEY <br />
        4. RDB Persistence <br />
      </span>
    ),
    imgAlt: "redis logo",
    imgUrl: "redis.svg",
    link: "https://github.com/kariuki-george/mini-redis",
    projectBadges: ["redis", "redis protocol spec", "async"],
    techBadges: ["Rust", "Tokio", "Tracing", "Tcp", "Data structures"],
    title: "MiniRedis in Rust",
  },
  {
    desc: (
      <span>
        LMS is modern, paperless, intuitive, scalable and realtime HR management
        service to manage user leaves.
        <br /> It allows users to: <br />
        1. Apply for leaves without all the paper work. <br />
        2. Track your leaves <br />
        3. Track coworkers leaves.
        <br />
      </span>
    ),
    imgUrl:
      "https://res.cloudinary.com/smiley-geek/image/upload/v1692872326/wfayjhdmkbmf4ohdmvcn.png",

    imgAlt: "LMS image",
    link: "https://lms-web.p.kariukigeorge.me/",
    projectBadges: ["LMS", "HR", "Leaves", "Calendly", "LeavesBoard"],
    techBadges: [
      "NextJs",
      "TailwindCss",
      "ShadCn",
      "NestJs",
      "Postgres",
      "Nodemail/Postmark",
      "Prisma",
      "Dates",
    ],
    title: " Leave Management System",
  },
  {
    desc: (
      <span>
        Comms creates modern Customer Service software that redefines how
        businesses support their customers. This platform connects businesses
        directly to customers using realtime messaging.
        <br /> It enable teams to scale support without investing more resources
        - leading to happier customers and more efficient support teams.
      </span>
    ),
    imgAlt: "Comms Image",
    imgUrl:
      "https://res.cloudinary.com/smiley-geek/image/upload/v1689241224/gzvfrwwfd9h3u8zm3roi.png",
    link: "https://comms.p.kariukigeorge.me/",
    projectBadges: ["Intercom", "Tawk.to", "Messaging"],
    techBadges: [
      "NextJs",
      "TailwindCss",
      "ShadCn",
      "NestJs",
      "Postgres",
      "Websockets",
      "Redis/ PubSub",
      "Realtime Analytics",
    ],
    title: " Comms chat provider",
  },
];

interface IProject {
  title: string;

  techBadges: string[];
  projectBadges: string[];
  desc: ReactNode;
  imgUrl: string;
  link: string;
  imgAlt: string;
}
