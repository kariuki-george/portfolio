import MidNav from "@/ui/molecules/MidNav/MidNav";
import WritingGroupModal from "@/ui/organisms/WritingGroupModal";
import { cva } from "cva";
import React from "react";

const bodyStyles = cva("w-full ");

const WriteMenu = () => {
  return (
    <div className="w-full  ">
      <MidNav headerText="Writing">
        <ul className={bodyStyles()}>
          {[1, 2].map((item, index) => (
            <li key={index}>
              <WritingGroupModal text={item.toString()} />
            </li>
          ))}
        </ul>
      </MidNav>
    </div>
  );
};

export default WriteMenu;
