import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";
import AnimatedText from "./AnimatedText";

const Contacts = () => {
  return (
    <div id="contact" className="w-full p-5 py-16">
      <AnimatedText
        text="Get In Touch"
        className="text-lg sm:text-xl font-bold mb-8 text-green-brand"
        delay={80}
      />

      <div className="space-y-6 max-w-2xl">
        <p className="text-lg text-gray-300">
          I'm always interested in hearing about new opportunities,
          collaborations, and interesting projects. Feel free to reach out!
        </p>

        {/* Email */}
        <div>
          <h3 className="text-sm text-gray-400 mb-2">Email</h3>
          <a
            href="mailto:kariukigeorge2030@gmail.com"
            className="text-xl text-green-brand hover:opacity-80 transition-opacity"
          >
            kariukigeorge2030@gmail.com
          </a>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-sm text-gray-400 mb-3">Connect</h3>
          <div className="flex gap-6 text-2xl">
            <a
              href="https://www.linkedin.com/in/kariukigeorge/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-green-brand transition-colors"
              title="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              href="https://github.com/kariuki-george"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-green-brand transition-colors"
              title="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href="https://twitter.com/_kariuki_george"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-green-brand transition-colors"
              title="Twitter"
            >
              <FiTwitter />
            </a>
            <a
              href="https://www.instagram.com/_kariuki_george/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-green-brand transition-colors"
              title="Instagram"
            >
              <BsInstagram />
            </a>
          </div>
        </div>

        {/* Status */}
        <div className="pt-4">
          <div className="inline-flex items-center gap-2 text-sm text-gray-400">
            <div className="w-2 h-2 rounded-full bg-green-brand animate-pulse"></div>
            <span>Open to new opportunities</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
