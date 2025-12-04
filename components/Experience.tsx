import type { NextPage } from "next";
import React from "react";
import AnimatedText from "./AnimatedText";
import { Badge } from "./ui/badge";

const Experience: NextPage = () => {
  return (
    <div id="experience" className="w-full p-5 py-16">
      <AnimatedText
        text="Experience"
        className="text-lg sm:text-xl font-bold mb-12 text-green-brand"
      />

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-6">
            {/* Timeline */}
            <div className="md:w-48 flex-shrink-0">
              <div className="text-sm text-gray-400">{exp.period}</div>
              <div className="text-sm text-gray-500">{exp.location}</div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-1">
                {exp.role}
              </h3>
              <div className="text-lg text-green-brand mb-4">{exp.company}</div>

              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="leading-relaxed">
                    {achievement}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, i) => (
                  <Badge
                    key={i}
                    className="bg-dark-700 border-dark-600 text-gray-300"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
  tech: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Service Availability Software Engineer",
    company: "Safaricom PLC",
    period: "April 2024 - Present",
    location: "Nairobi, Hybrid",
    achievements: [
      "Contribute to the development of an in-house observability platform",
      "Develop rust-powered Ebpf programs for dynamic Linux kernel behavior",
      "Develop pipelines to ship big data to Kafka and from Kafka to consumers",
    ],
    tech: ["Rust", "Linux Kernel", "Ebpf", "Kafka", "Clickhouse"],
  },
  {
    role: "Software Developer",
    company: "Stima Mobility",
    period: "Sept 2023 - April 2024",
    location: "Nairobi",
    achievements: [
      "Build a smart battery temperature analytics platform",
      "Integrate with real-time APIs to poll new data from StimaMobility's Infrastructure",
      "Integrate with ML APIs to get battery temperature predictions",
      "Design and build a data aggregation, anomaly detection, and alerting system",
    ],
    tech: ["NextJs", "TailwindCSS", "Golang", "Machine Learning", "Chartjs"],
  },
  {
    role: "Software Development and Technical Support Intern",
    company: "State Department for Housing and Urban Planning",
    period: "Jun 2023 - Aug 2023",
    location: "Kenya",
    achievements: [
      "Developed a simple chatbot system for help and support",
      "Built a leave management system",
      "Created a GeoSpatial national database and supporting web application",
      "Performed data cleaning and processing",
    ],
    tech: [
      "NextJs",
      "Vue",
      "TailwindCSS",
      "NestJs",
      "Postgres",
      "Cloud Computing",
    ],
  },
  {
    role: "Senior Frontend Developer",
    company: "Sellhustle",
    period: "Jan 2022 - Nov 2022",
    location: "Remote, Nigeria",
    achievements: [
      "Led team in integrating and improving web applications",
      "Integrated web apps with GraphQL APIs and coded new designs",
      "Developed networking and deployment solutions for multitenant e-commerce architectures",
    ],
    tech: ["NextJs", "TailwindCSS", "Apollo GraphQL", "Redux Toolkit"],
  },
];
