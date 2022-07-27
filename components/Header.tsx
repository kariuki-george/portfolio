import { NextPage } from "next";
import React from "react";
import { FaHamburger } from "react-icons/fa";

import { useRouter } from "next/router";
import { useKBar } from "kbar";

const Header: NextPage = () => {
  const router = useRouter();

  return (
    <div className="w-screen bg-black-500 sticky top-0  text-white z-10 ">
      <div
        className={`sm:text-3xl p-5 py-4 text-2xl flex justify-between align-center  max-w-[1100px] mx-auto `}
      >
        <span
          onClick={() => router.push("/")}
          className="text-green-brand cursor-pointer"
        >
          thuo
        </span>

        <span
          className="flex align-baseline hover:cursor-pointer"
          onClick={useKBar().query.toggle}
        >
          <FaHamburger />
        </span>
      </div>
    </div>
  );
};

export default Header;

