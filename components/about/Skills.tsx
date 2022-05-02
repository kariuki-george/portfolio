import { NextPage } from "next";
import React from "react";
import Card from "./Card";
import skills from "../../lib/skills";

const Skills: NextPage = () => {
  return (
    <div className="w-full mt-10 flex flex-col justify-center items-center">
      <section className="text-4xl my-3 mb-6 underline underline-offset-2 decoration-green-brand/40 decoration-wavy">
        my tools of work
      </section>
      <section className="my-3 flex sm:flex-col md:flex-row">
        <Card skills={skills.frontend} />
        <Card skills={skills.backend} />
        <Card skills={skills.deployments} />{" "}
      </section>
    </div>
);
};

export default Skills;
