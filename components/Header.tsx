import { NextPage } from "next";
import React from "react";
import { FaHamburger } from "react-icons/fa";
import Modal from "./Modal";
import { useRouter } from "next/router";

const Header: NextPage = () => {
  const [modal, setModal] = React.useState(false);
  const handleMenuBar = () => {
    setModal(true);
  };
  const router = useRouter();

  const handleClick = (link: String) => {
    if (link === "home") return router.replace("/");
    return router.replace(`#${link}`);
  };

  return (
    <div className="w-screen bg-black-500 sticky top-0  text-white z-10 ">
      <div
        className={`sm:text-3xl p-5 py-4 text-2xl flex justify-between align-center  max-w-[1100px] mx-auto `}
      >
        {modal && (
          <Modal links={links} handleClick={handleClick} setModal={setModal} />
        )}
        <span
          onClick={() => handleClick("home")}
          className="text-green-brand cursor-pointer"
        >
          thuo
        </span>
        <ul className="flex sm:hidden md:flex">
          {links.map((link) => (
            <li
              onClick={() => handleClick(link.name)}
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
          <button onClick={() => handleClick("contacts")}>
            let&apos;s talk
          </button>
        </span>
      </div>
    </div>
  );
};

export default Header;

const links = [
  {
    name: "home",
  },
  {
    name: "about",
  },
  {
    name: "skills",
  },

  {
    name: "projects",
  },
];
