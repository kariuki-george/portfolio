import React from "react";
import About from "./About";
import Skills from "./Skills";
import Layout from "./Layout";
const index = () => {
  return (
    <div className="w-full bg-white text-black-500  pt-10  ">
      <About />
      <Skills />
      <Layout />
    </div>
  );
};

export default index;
