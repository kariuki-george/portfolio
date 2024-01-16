import { NextPage } from "next";
import React from "react";
import Link from "next/link";
import { BsArrowUp } from "react-icons/bs";

const Footer: NextPage = () => {
  const handleTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="w-full text-green-brand flex justify-between p-10 my-10  items-center  ">
      <Link href="/" passHref>
        <span className="text-2xl hover:cursor-pointer">thuo</span>
      </Link>
      <span>&copy; 2024 </span>
      <span
        onClick={handleTop}
        className=" bg-green-brand/5 rounded border p-2 hover:text-white hover:cursor-pointer"
      >
        <BsArrowUp />
      </span>
    </div>
  );
};

export default Footer;
