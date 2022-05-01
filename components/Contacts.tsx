import React from "react";
import { FiTwitter } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
const Contacts = () => {
  return (
    <div className="my-5 p-5 flex flex-col items-center">
      <section className="text-3xl underline decoration-wavy decoration-green-brand mb-10">
        let&apos;s talk
      </section>
      <section className="flex sm:flex-col md:flex-row items-center ">
        <section>
          <img className=" object-contain" src="/chat.svg" alt="man with phone" />
        </section>
        <section className=" flex flex-col items-center p-3 border border-green-brand/10 sm:full md-1/2 ">
          <span className="text-3xl my-3">get in touch</span>
          <section>
            <form className="flex flex-col sm:max-w-[350px] max-w-[600px]  ">
              <input
                type="text"
                className="p-2 active:p-1 text-center active:outline-none outline-none m-3  placeholder:text-green-400 text-xl bg-transparent border-b  "
                placeholder="First Name"
              />
              <input
                type="text"
                className="p-2 active:p-1 text-center active:outline-none outline-none m-3  placeholder:text-green-400 text-xl bg-transparent border-b  "
                placeholder="Last Name"
              />
              <input
                type="email"
                className="p-2 active:p-1 text-center active:outline-none outline-none m-3  placeholder:text-green-400 text-xl bg-transparent border-b  "
                placeholder="Email Address"
              />
              <input
                type="text"
                className="p-2 active:p-1 text-center active:outline-none outline-none m-3  placeholder:text-green-400 text-xl bg-transparent border-b  "
                placeholder="Subject"
              />
              <textarea
                className="p-2 active:p-1 text-center active:outline-none outline-none m-3  placeholder:text-green-400 text-xl bg-transparent border-b  resize-y h-[100px]"
                placeholder="Your message"
              />
              <button className="border p-2 text-xl text-green-brand rounded bg-green-brand/5 hover:text-white">
                send message
              </button>
            </form>
          </section>
          <span className="text-xl my-7">or</span>
          <section className="flex p-3 w-1/2 justify-around text-xl">
            <span className="hover:cursor-pointer text-green-brand ">
              <a target="_blank" rel="noreferrer" href="https://twitter.com/_kariuki_george">
                {" "}
                <FiTwitter />
              </a>
            </span>
            <span className="hover:cursor-pointer text-green-brand ">
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/smiling_thuo/">
                <BsInstagram />
              </a>
            </span>
            <span className="hover:cursor-pointer text-green-brand ">
              <a target="_blank" rel="noreferrer" href="https://github.com/smiley-geek">
                <FiGithub />
              </a>
            </span>
          </section>
        </section>
      </section>
    </div>
  );
};

export default Contacts;
