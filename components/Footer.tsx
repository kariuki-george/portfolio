"use client";

import type { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { BsArrowUp } from "react-icons/bs";
import AnimatedText from "./AnimatedText";

const Footer: NextPage = () => {
  const handleTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="w-full text-green-brand border-t border-dark-700 bg-dark-900">
      <div className="max-w-[900px] mx-auto flex justify-between p-10 my-10 items-center">
        <Link href="/" passHref>
          <span className="text-2xl hover:cursor-pointer font-bold hover:opacity-80 transition-opacity">
            <AnimatedText text="thuo" />
          </span>
        </Link>
        <span className="text-gray-400">&copy; 2026 </span>
        <span
          onClick={handleTop}
          className="bg-dark-800 border border-dark-700 rounded-lg p-3 hover:bg-green-brand hover:text-black hover:cursor-pointer transition-all"
        >
          <BsArrowUp />
        </span>
      </div>
    </div>
  );
};

export default Footer;
