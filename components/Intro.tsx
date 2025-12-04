import type { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";
import AnimatedText from "./AnimatedText";

const Intro: NextPage = () => {
  return (
    <div className="w-full p-5 py-20 flex flex-col items-center md:items-start">
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start w-full">
        {/* Avatar */}
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-green-brand/30 flex-shrink-0">
          <Image
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1691341772043/b81414dd-0790-4d85-a58f-17580026efe1.jpeg?w=400&h=400&fit=crop&crop=faces&auto=compress,format&format=webp"
            alt="Kariuki George"
            fill
            className="object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex-1 flex flex-col gap-4">
          <div>
            <AnimatedText
              text="Kariuki George"
              className="text-4xl md:text-5xl font-bold mb-2"
              delay={120}
            />
            <p className="text-xl text-gray-400 mb-1">
              Software Engineer @ Safaricom PLC
            </p>
            <p className="text-gray-500">Nairobi, Kenya</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 text-lg">
            <a
              href="https://www.linkedin.com/in/kariukigeorge/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-green-brand transition-colors flex items-center gap-2"
            >
              <FiLinkedin />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a
              href="https://github.com/kariuki-george"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-green-brand transition-colors flex items-center gap-2"
            >
              <FiGithub />
              <span className="text-sm">GitHub</span>
            </a>
            <a
              href="https://twitter.com/_kariuki_george"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-green-brand transition-colors flex items-center gap-2"
            >
              <FiTwitter />
              <span className="text-sm">Twitter</span>
            </a>
            <a
              href="mailto:kariukigeorge2030@gmail.com"
              className="text-gray-400 hover:text-green-brand transition-colors flex items-center gap-2"
            >
              <FiMail />
              <span className="text-sm">Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
