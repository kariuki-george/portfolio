import React from "react";
import clsx from "clsx";
import Nav from "../organisms/Nav/Nav";

interface Props {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: Props) => {
  return (
    <div
      className={clsx(
        "max-w-screen w-full min-h-screen h-full flex  ",
        "bg-black/95",
        "text-text-primary  "
      )}
    >
      {children}
    </div>
  );
};

export default DefaultLayout;
