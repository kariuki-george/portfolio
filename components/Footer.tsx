import { NextPage } from "next";
import React from "react";
import Link from "next/link";
import { BsArrowUp } from "react-icons/bs";
import Router, { useRouter } from "next/router";

const Footer: NextPage = () => {
  const router = useRouter();
  const handleTop = () => {
    Router.replace("/");
  };
  return (
    <div className="w-full flex justify-between p-10 my-10  items-center  ">
      <Link href="/" passHref>
        <span className="text-2xl hover:cursor-pointer">thuo</span>
      </Link>
      <span>&copy; 2020 thuo.</span>
      <span onClick={handleTop} className="text-green-brand bg-green-brand/5 rounded border p-2 hover:text-white hover:cursor-pointer">
        <BsArrowUp />
      </span>
    </div>
  );
};

export default Footer;
