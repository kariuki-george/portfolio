import { cva } from "cva";
import React from "react";
import { HashLoader } from "react-spinners";

const loaderStyles = cva("");

const Loader = () => {
  return (
    <div className="w-full flex flex-col my-4 justify-center items-center gap-2">
      <HashLoader
        color="#7f8a88"
        size={30}
        className="text-text-primary text-sm h-2"
      />{" "}
      <span className="text-text-secondary">fetching your notes</span>
    </div>
  );
};

export default Loader;
