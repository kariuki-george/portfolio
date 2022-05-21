import { NextPage } from "next";
import React from "react";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
interface Props {
  children: React.ReactNode;
}
const Global: NextPage<Props> = ({ children }) => {
  return (
    <div className="w-screen bg-black ">
      <Head>
        <title>smiley-geek</title>
        <meta
          name="description"
          content="This is a portfolio for Kariuki George Thuo"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Toaster />
      {children}
    </div>
  );
};

export default Global;
