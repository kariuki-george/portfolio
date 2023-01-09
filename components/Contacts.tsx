import React, { useEffect, useState } from "react";
import { FiTwitter } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { AiOutlineMail, AiOutlineLinkedin } from "react-icons/ai";

import toast from "react-hot-toast";
import axios from "axios";

const Contacts = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: any) => {
    return toast.error("Sorry this operation has been temporarily disabled.");
    e.preventDefault();
    if (!(firstName && lastName && email && subject && message)) {
      return toast.error("please fill all fields");
    }
    setLoading(true);
    const res = await axios.post(
      "https://geekhub.smiley-geek-codes.tech/api/message",
      {
        firstName,
        lastName,
        email,
        subject,
        message,
      }
    );
    setLoading(false);
    if (res.data.error) {
      toast.error(res.data.message);
    }
    if (res.data.success) {
      toast.success(res.data.message);
    }
  };
  useEffect(() => {
    if (loading) {
      toast.loading("Sending message", { id: "createMessageLoader" });
    } else {
      toast.dismiss("createMessageLoader");
    }
  }, [loading]);

  return (
    <div id="contacts" className="my-5 p-5 flex flex-col items-center">
      <section className="text-3xl underline decoration-wavy decoration-green-brand/40 mb-10">
        let&apos;s talk
      </section>
      <section className="flex sm:flex-col md:flex-row items-center ">
        <section>
          <img
            className=" object-contain"
            src="/chat.svg"
            alt="man with phone"
          />
        </section>
        <section className=" flex flex-col items-center p-3 border border-green-brand/10 sm:full md-1/2 ">
          <span className="text-3xl my-3">get in touch</span>
          <section>
            <form
              className="flex flex-col sm:max-w-[350px] max-w-[600px]  "
              onSubmit={() => {}}
            >
              <input
                type="text"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                className="p-2 active:p-1 text-center active:outline-none outline-none m-3  placeholder:text-green-400 text-xl bg-transparent border-b  "
                placeholder="First Name"
              />
              <input
                type="text"
                className="p-2 active:p-1 text-center active:outline-none outline-none m-3  placeholder:text-green-400 text-xl bg-transparent border-b  "
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
              <input
                type="email"
                className="p-2 active:p-1 text-center active:outline-none outline-none m-3  placeholder:text-green-400 text-xl bg-transparent border-b  "
                placeholder="Email Address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                type="text"
                className="p-2 active:p-1 text-center active:outline-none outline-none m-3  placeholder:text-green-400 text-xl bg-transparent border-b  "
                placeholder="Subject"
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
              />
              <textarea
                className="p-2 active:p-1 text-center active:outline-none outline-none m-3  placeholder:text-green-400 text-xl bg-transparent border-b  resize-y h-[100px]"
                placeholder="Your message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
              <button
                className="border p-2 text-xl text-green-brand rounded bg-green-brand/5 hover:text-white"
                onClick={handleSubmit}
                disabled={false}
              >
                {loading ? "sending..." : "send message"}
              </button>
            </form>
          </section>
          <span className="text-xl my-7">or</span>
          <section className="flex p-3 w-1/2 justify-around text-xl">
            <span className="mx-1 hover:cursor-pointer text-green-brand ">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/_kariuki_george"
              >
                {" "}
                <FiTwitter />
              </a>
            </span>
            <span className="mx-1 hover:cursor-pointer text-green-brand ">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/_kariuki_george/"
              >
                <BsInstagram />
              </a>
            </span>
            <span className="mx-1 hover:cursor-pointer text-green-brand ">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/smiley-geek"
              >
                <FiGithub />
              </a>
            </span>
            <span className="mx-1 hover:cursor-pointer text-green-brand ">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/kariukigeorge/"
              >
                <AiOutlineLinkedin />
              </a>
            </span>
            <span className="mx-1 hover:cursor-pointer text-green-brand ">
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:kariukigeorge2030@gmail.com?Subject=hi"
              >
                <AiOutlineMail />
              </a>
            </span>
          </section>
        </section>
      </section>
    </div>
  );
};

export default Contacts;
