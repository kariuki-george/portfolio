import type { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Hero: NextPage = () => {
  return (
    <div className="flex w-full flex-col min-h-screen md:flex-row items-center justify-center md:justify-start relative p-5 py-4">
      {/* Mobile hero image */}
      <section className="flex md:hidden m-3 my-10 h-[200px] w-full relative animate-fade-in opacity-30">
        <Image
          src="/heropage.svg"
          alt="hero image"
          priority
          fill
          sizes="100vw"
          style={{
            objectFit: "fill",
          }}
        />
      </section>

      {/* Hero content */}
      <section className="w-full flex flex-col items-center md:items-start lg:items-center md:w-1/2 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          I&apos;m Kariuki <span className="text-green-brand">George</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-8">
          software developer, optimist and technophile
        </p>

        <a href="#contacts" className="w-full flex justify-center">
          <Button
            className="w-full md:w-2/3 bg-green-brand text-black hover:bg-green-brand/90 transition-all font-semibold text-lg py-6"
            variant="default"
          >
            let&apos;s build something great
          </Button>
        </a>
      </section>

      {/* Desktop hero image */}
      <section className="pb-4 hidden md:flex w-2/3 absolute right-0 h-full justify-center opacity-10">
        <Image
          src="/heropage.svg"
          alt="hero image"
          fill
          sizes="100vw"
          style={{
            objectFit: "fill",
          }}
        />
      </section>
    </div>
  );
};

export default Hero;
