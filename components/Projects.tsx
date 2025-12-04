"use client";

import type { NextPage } from "next";
import Image from "next/image";
import React, { useState } from "react";
import { LuChevronDown, LuChevronUp, LuExternalLink } from "react-icons/lu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import AnimatedText from "./AnimatedText";
import { Badge } from "./ui/badge";

const Projects: NextPage = () => {
  // State to track open/closed state for each project
  const [openStates, setOpenStates] = useState<Record<number, boolean>>({});

  const toggleOpen = (index: number) => {
    setOpenStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div id="projects" className="w-full p-5 py-16">
      <AnimatedText
        text="Projects"
        className="text-lg sm:text-xl font-bold mb-12 text-green-brand"
      />

      <div className="flex flex-col border-t border-dark-700">
        {projects.map((project, index) => {
          const isOpen = openStates[index];

          return (
            <Collapsible
              key={index}
              open={isOpen}
              onOpenChange={() => toggleOpen(index)}
              className="border-b border-dark-700 transition-all duration-300 hover:bg-dark-800/30"
            >
              {/* Desktop Layout */}
              <div className="hidden md:flex items-center justify-between p-6 group">
                {/* Left: Icon + Title + Tags */}
                <div className="flex items-start gap-6 flex-1 min-w-0">
                  {/* Project Icon/Image */}
                  <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border border-dark-600 p-1.5 bg-dark-800">
                    <Image
                      alt={project.imgAlt}
                      src={project.imgUrl}
                      width={64}
                      height={64}
                      className="object-contain w-full h-full bg-white rounded-md"
                    />
                  </div>

                  <div className="flex flex-col gap-2 flex-1 min-w-0 pt-1">
                    <h3 className="text-xl font-semibold text-white group-hover:text-green-brand transition-colors">
                      {project.title}
                    </h3>

                    {/* Tags (replacing date) */}
                    <div className="flex flex-wrap gap-2">
                      {project.projectBadges.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs font-mono text-gray-500 bg-dark-800 px-2 py-0.5 rounded border border-dark-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-4 ml-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 text-gray-400 hover:text-green-brand transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <LuExternalLink className="w-5 h-5" />
                  </a>

                  <CollapsibleTrigger asChild>
                    <button className="p-2 text-gray-400 hover:text-white transition-colors">
                      {isOpen ? (
                        <LuChevronUp className="w-5 h-5" />
                      ) : (
                        <LuChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </CollapsibleTrigger>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="md:hidden p-4 group">
                {/* Row 1: Avatar + (Name + Actions in column) */}
                <div className="flex items-start gap-3 mb-3">
                  {/* Avatar */}
                  <div className="relative w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden border border-dark-600 p-1 bg-dark-800">
                    <Image
                      alt={project.imgAlt}
                      src={project.imgUrl}
                      width={48}
                      height={48}
                      className="object-contain w-full h-full bg-white rounded-md"
                    />
                  </div>

                  {/* Name + Actions Column */}
                  <div className="flex flex-col gap-2 flex-1">
                    {/* Title */}
                    <h3 className="text-base font-semibold text-white group-hover:text-green-brand transition-colors">
                      {project.title}
                    </h3>

                    {/* Actions (Link + Expand button) */}
                    <div className="flex items-center gap-2">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 text-gray-400 hover:text-green-brand transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <LuExternalLink className="w-4 h-4" />
                      </a>

                      <CollapsibleTrigger asChild>
                        <button className="p-1.5 text-gray-400 hover:text-white transition-colors">
                          {isOpen ? (
                            <LuChevronUp className="w-4 h-4" />
                          ) : (
                            <LuChevronDown className="w-4 h-4" />
                          )}
                        </button>
                      </CollapsibleTrigger>
                    </div>
                  </div>
                </div>

                {/* Row 2: Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.projectBadges.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono text-gray-500 bg-dark-800 px-2 py-0.5 rounded border border-dark-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <CollapsibleContent>
                <div className="px-6 pb-8 pl-0 md:pl-[5.5rem]">
                  <div className="space-y-6">
                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed max-w-3xl">
                      {project.shortDesc}
                    </p>

                    {/* Features */}
                    {project.features && project.features.length > 0 && (
                      <ul className="space-y-2">
                        {project.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-gray-400"
                          >
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-dark-500 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.techBadges.map((badge, i) => (
                        <Badge
                          key={i}
                          className="bg-dark-800 border-dark-600 text-xs text-gray-400 hover:border-green-brand/30 hover:text-gray-300 transition-colors px-3 py-1"
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

interface IProject {
  title: string;
  techBadges: string[];
  projectBadges: string[];
  shortDesc: string;
  features?: string[];
  imgUrl: string;
  link: string;
  imgAlt: string;
}

const projects: IProject[] = [
  {
    title: "Tunnelicious",
    shortDesc:
      "A lightweight HTTP traffic tunneling system that securely exposes local services to the internet over HTTPS",
    features: [
      "Secure HTTPS tunneling with automatic SSL certificates",
      "Real-time traffic monitoring and analytics",
      "Multi-domain support with custom subdomains",
    ],
    imgAlt: "tunnelicious logo",
    imgUrl:
      "https://i.pinimg.com/1200x/d4/1a/62/d41a629dd304ae1d5e03677c4a6b4c5f.jpg",
    link: "https://tunnelicious.kariukigeorge.me",
    projectBadges: [
      "Distributed Systems",
      "Multithreading",
      "Tunneling",
      "Streaming",
      "Proxying",
    ],
    techBadges: ["Go", "HTTP/2", "gRPC", "Microservices", "Cloudflare Tunnels"],
  },
  {
    title: "Gossip Glomers Challenge",
    shortDesc:
      "Distributed systems challenges including fault-tolerant broadcast, unique ID generation, and Kafka-style log",
    features: [
      "Fault-tolerant broadcast with eventual consistency",
      "Distributed unique ID generation at scale",
      "Kafka-style replicated log implementation",
    ],
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
  },
  {
    title: "MiniRedis in Rust",
    shortDesc:
      "A Redis implementation supporting core features like PING, SET, GET, and RDB persistence",
    features: [
      "RESP protocol implementation for Redis compatibility",
      "RDB snapshot persistence for data durability",
      "Async I/O with Tokio for high performance",
    ],
    imgAlt: "redis logo",
    imgUrl: "/redis.svg",
    link: "https://github.com/kariuki-george/mini-redis",
    projectBadges: ["redis", "redis protocol spec", "async"],
    techBadges: ["Rust", "Tokio", "Tracing", "Tcp", "Data structures"],
  },
  {
    title: "Leave Management System",
    shortDesc:
      "Modern, paperless HR management service to manage user leaves with real-time tracking",
    features: [
      "Real-time leave tracking and approval workflows",
      "Calendar integration for leave visualization",
      "Automated email notifications for approvals",
    ],
    imgUrl:
      "https://res.cloudinary.com/smiley-geek/image/upload/v1692872326/wfayjhdmkbmf4ohdmvcn.png",
    imgAlt: "LMS image",
    link: "https://lms-web.p.kariukigeorge.me/",
    projectBadges: ["LMS", "HR", "Leaves", "Calendly", "LeavesBoard"],
    techBadges: [
      "NextJs",
      "TailwindCSS",
      "ShadCn",
      "NestJs",
      "Postgres",
      "Nodemail",
      "Prisma",
    ],
  },
  {
    title: "Comms Chat Provider",
    shortDesc:
      "Modern customer service software connecting businesses to customers using real-time messaging",
    features: [
      "Real-time messaging with WebSocket connections",
      "Live analytics dashboard for customer interactions",
      "Multi-channel support (web, mobile)",
    ],
    imgAlt: "Comms Image",
    imgUrl:
      "https://res.cloudinary.com/smiley-geek/image/upload/v1689241224/gzvfrwwfd9h3u8zm3roi.png",
    link: "https://comms.p.kariukigeorge.me/",
    projectBadges: ["Intercom", "Tawk.to", "Messaging"],
    techBadges: [
      "NextJs",
      "TailwindCSS",
      "ShadCn",
      "NestJs",
      "Postgres",
      "Websockets",
      "Redis",
      "Realtime Analytics",
    ],
  },
];
