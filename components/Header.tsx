import { NextPage } from "next";
import React from "react";
import { FaHamburger } from "react-icons/fa";
import Modal from "./Modal";

const Header: NextPage = () => {
  const [modal, setModal] = React.useState(false);
  const handleMenuBar = () => {
    setModal(true);
  };

  const links = [
    {
      name: "home",
      link: "/",
    },
    {
      name: "about",
      link: "/",
    },
    {
      name: "skills",
      link: "/",
    },

    {
      name: "projects",
      link: "/",
    },
  ];

  return (
    <div className="sm:text-3xl p-6  text-2xl flex justify-between align-center  text-white  w-full z-5  ">
      {modal && <Modal links={links} setModal={setModal} />}
      <span className="text-green-brand">thuo</span>
      <ul className="flex sm:hidden md:flex">
        {links.map((link) => (
          <li
            key={link.name}
            className=" hover:cursor-pointer hover:text-green-brand hover:opacity-100 mr-1 ml-1"
          >
            {link.name}
          </li>
        ))}
      </ul>
      <span
        className="md:hidden flex align-baseline hover:cursor-pointer"
        onClick={handleMenuBar}
      >
        <FaHamburger />
      </span>
      <span className="text-md sm:hidden md:inline  rounded-lg px-1 text-green-brand  h-10  border-green-brand border hover:bg-green-brand/5 hover:text-white">
        <button>let&apos;s talk</button>
      </span>
    </div>
  );
};

export default Header;
