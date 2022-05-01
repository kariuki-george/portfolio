import { NextPage } from "next";
import React from "react";
import {BsDoorClosed} from "react-icons/bs"

interface Link {
  name: String;
  link: String;
}

interface Links {
  links: Link[];
  setModal:React.Dispatch<React.SetStateAction<boolean>>
}

const Modal: NextPage<Links> = ({ links, setModal }) => {
    const handleModal = ()=>{
        setModal(false)
    }
  return (
    <div className="w-full -mx-6 p-7  fixed flex flex-col justify-between bg-black-500 h-screen top-0 z-10 text-white">
      <section className="w-full flex justify-between ">
        <span className="text-green-brand">thuo</span>
        <span onClick={handleModal} className="hover:cursor-pointer "><BsDoorClosed/></span>
      </section>
      <section className="flex flex-col h-1/2 justify-between ">
        {links.map((link) => (
          <li key={Math.random()} className="opacity-70 hover:cursor-pointer hover:text-green-brand hover:opacity-100 mr-1 ml-1 w-full flex justify-center my-3 ">
            {link.name}
          </li>
        ))}
      </section>
      <section className="flex justify-center text-md w-full   rounded-lg px-1 text-green-brand  h-10  border-green-brand border hover:bg-green-brand/5 hover:text-white">
        <button>let&apos;s talk</button>
      </section>
    </div>
  );
};

export default Modal;
