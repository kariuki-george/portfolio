import React from "react";

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Providers;
