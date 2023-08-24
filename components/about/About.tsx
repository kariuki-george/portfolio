import { NextPage } from "next";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const About: NextPage = () => {
  return (
    <div
      id="about"
      className="p-10 pt-2 mb-10 w-full flex flex-col items-center justify-center"
    >
      {/* <span className="   text-4xl underline underline-offset-2 decoration-green-brand/40 decoration-wavy">
        go beyond with a remote software developer
      </span> */}
      <span className=" w-full ">
        {/* <span className="sm:w-full md:w-2/3 py-3 md:absolute md:left-0 md:flex md:justify-center  md:min-h-[600px] ">
          <img className="w-full" src="/aboutpage.svg" alt="hero image" />
        </span> */}

        <p className="w-full  ">
          I create educational content for developers, making the hard concepts
          easier. My current tools of choice include TypeScript, Nestjs,
          Next.js, Graphql, Postgres and more. This comes in the form: of blog
          posts and tweets. You can check them out below.
        </p>
        <span>
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </span>
      </span>
    </div>
  );
};

export default About;
