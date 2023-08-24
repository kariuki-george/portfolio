import { NextPage } from "next";
import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";

const Hero: NextPage = () => {
  return (
    <div className="flex w-full sm:flex-col min-h-screen md:flex-row items-center justify-center md:justify-start  relative  p-5 py-4">
      <section className="sm:inline md:hidden m-3 my-10  h-[200px]   w-full relative">
        <Image
          layout="fill"
          objectFit="fill"
          src="/heropage.svg"
          alt="hero image"
          priority
        />
      </section>
      <section className="w-full flex flex-col items-center  md:items-start lg:items-center md:w-1/2">
        <span className="text-5xl sm:text-4xl">
          I&apos;m Kariuki <span className="text-green-brand">George</span>
        </span>

        <p className="text-xl">
          Fullstack web developer, optimist and technophile
        </p>
        <Link href="#contacts" passHref>
          <button className="w-2/3   my-10 text-green-brand  h-10 rounded border-green-brand border hover:bg-green-brand/5 hover:text-white">
            let&apos;s build something great
          </button>
        </Link>
      </section>
      <section className=" pb-4 sm:hidden md:flex w-2/3 absolute right-0   h-full justify-center ">
        <Image
          layout="fill"
          objectFit="fill"
          src="/heropage.svg"
          alt="hero image"
        />
      </section>
    </div>
  );
};

export default Hero;
