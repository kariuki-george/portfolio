import MidNav from "@/ui/molecules/MidNav/MidNav";
import { cva } from "cva";
import React from "react";

const homeStyles = cva("");

const Home = () => {
  return (
    <div className={homeStyles()}>
      <MidNav headerText="Home">
        My name is Kariuki George Thuo. I'm a full a fullstack web developer.
      </MidNav>
    </div>
  );
};

export default Home;
