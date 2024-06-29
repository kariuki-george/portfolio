import { NextPage } from "next";
import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const Hero: NextPage = () => {
  return (
    <div className="flex w-full flex-col min-h-screen md:flex-row items-center justify-center md:justify-start  relative  p-5 py-4">
      <section className=" flex md:hidden m-3 my-10  h-[200px]   w-full relative">
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
      <section className="w-full flex flex-col items-center  md:items-start lg:items-center md:w-1/2">
        <span className="text-2xl md:text-4xl">
          I&apos;m Kariuki <span className="text-green-brand">George</span>
        </span>

        <p className="text-lg">software developer, optimist and technophile</p>

        <a href="#contacts" className="w-full flex justify-center">
          <Button className="w-2/3  my-10" variant={"outline"}>
            let&apos;s build something great
          </Button>
        </a>
      </section>
      <section className=" pb-4 hidden md:flex w-2/3 absolute right-0   h-full justify-center ">
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
