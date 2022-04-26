import { NextPage } from "next";
import React from "react";
import { FaHamburger } from "react-icons/fa";

const Header: NextPage = () => {
  const handleMenuBar = () => {
    console.log(Date.now());
  };
  return (
    <div className="sm:text-3xl m-6  text-2xl flex justify-between align-center underline  text-white ">
      <span className="md:hidden flex align-baseline" onClick={handleMenuBar}>
        <FaHamburger />
      </span>
      <ul className="flex sm:hidden md:flex">
        <li className="opacity-70 hover:cursor-pointer hover:opacity-100 mr-1 ml-1">
          home
        </li>
        <li className="opacity-70 hover:cursor-pointer hover:opacity-100 mr-1 ml-1">
          about
        </li>
        <li className="opacity-70 hover:cursor-pointer hover:opacity-100 mr-1 ml-1">
          skills
        </li>
        <li className="opacity-70 hover:cursor-pointer hover:opacity-100 mr-1 ml-1">
          projects
        </li>
      </ul>
      <span className=" hover:bg-white/25 rounded-lg p-1 ">
        <button>contact</button>
      </span>
    </div>
  );
};

export default Header;
