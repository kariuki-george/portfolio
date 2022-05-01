import { NextPage } from "next";
import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

// interface Skill {
//   name: String;

//   icon: String;
// }

// interface Skills {
//   name: String;
//   desc: String;
//   skills: Skill[];
// }

const Card = ({ skills }) => {
  const [showTitleDesc, setShowTitleDesc] = React.useState(false);
  const handleShowTitleDesc = (args) => {
    setShowTitleDesc(args);
  };

  return (
    <div className="flex flex-col justify-center items-center sm:w-[300px] md:w-[200px] lg:w-[300px] p-4 border rounded shadow-sm shadow-green-brand m-5 hover:cursor-pointer  ">
      <section className="text-3xl hover:text-green-brand p-3 flex items-center group ">
        {skills.name}
        {!showTitleDesc && (
          <span
            onClick={() => {
              handleShowTitleDesc(true);
            }}
            className="ml-3 hidden group-hover:inline text-xl"
          >
            {<AiOutlineEye />}
          </span>
        )}{" "}
        {showTitleDesc && (
          <span
            onClick={() => {
              handleShowTitleDesc(false);
            }}
            className="ml-3 hidden group-hover:inline text-xl"
          >
            {<AiOutlineEyeInvisible />}
          </span>
        )}
      </section>
      {showTitleDesc && (
        <section className="m-2">
          <p>{skills.desc}</p>
        </section>
      )}

      <section>
        {skills.skills.map((skill) => (
          <span
            key={skill.name}
            className="w-full  text-xl my-5    flex items-center justify-between"
          >
            <img
              src={skill.icon}
              className=" w-9 object-contain "
              alt={skill.name}
            />

            <span>{skill.name}</span>
          </span>
        ))}
      </section>
    </div>
  );
};

export default Card;
