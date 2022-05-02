import { NextPage } from "next";
import React from "react";

interface Props {
  children: React.ReactNode;
}
const Black: NextPage<Props> = ({ children }) => {
  return (
    <div className="w-full text-white bg-black-500">
      <section className="w-full max-w-[1100px] m-auto ">{children}</section>
    </div>
  );
};

export default Black;
