import { cva } from "cva";
import React from "react";

const homeStyles = cva("p-10");

const Home = () => {
  return (
    <div className={homeStyles()}>
      My name is Kariuki George Thuo. I'm a full a fullstack web developer.
    </div>
  );
};

export default Home;
