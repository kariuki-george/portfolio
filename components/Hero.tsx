import { NextPage } from "next";
import React from "react";

const Hero: NextPage = () => {
  return (
    <div className="flex w-full sm:flex-col h-screen md:flex-row items-center justify-center md:justify-start py-4 relative  p-5">
      <section className="sm:inline md:hidden m-3 my-10    w-full">
        <img className="w-full " src="/heropage.svg" alt="" />
      </section>
      <section className="w-full flex flex-col items-center  md:items-start lg:items-center md:w-1/2">
        <span className="text-5xl">
          I&apos;m Kariuki <span className="text-green-brand">George</span>
        </span>

        <p className="text-xl">Freelance fullstack web developer</p>
        <button className="w-2/3   my-10 text-green-brand  h-10 rounded border-green-brand border hover:bg-green-brand/5 hover:text-white">
          let&apos;s build something great
        </button>
      </section>
      <section className="sm:hidden md:flex w-2/3 absolute right-0   h-full justify-center ">
        <img className="w-full mb-4  " src="/heropage.svg" alt="" />
      </section>
    </div>
  );
};

export default Hero;
