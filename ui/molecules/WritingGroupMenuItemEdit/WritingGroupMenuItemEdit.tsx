import Button from "@/ui/atoms/Button";
import { cva } from "cva";
import React from "react";
import clsx from "clsx";
import Input from "@/ui/atoms/Input";

const writingGroupMenuItemEditStyles = cva("flex flex-col gap-2 my-3");

export interface WritingGroupMenuItemEditProps {}

const WritingGroupMenuItemEdit = () => {
  return (
    <div className={writingGroupMenuItemEditStyles()}>
      <Input placeHolder="Name" onChange={() => {}} value="" type={"text"} />
      {/* <Input
        placeHolder="Sort Number"
        onChange={() => {}}
        value=""
        type={"number"}
      /> */}

      <span className={clsx("flex justify-evenly")}>
        <Button type="button" text="Save" />
        <Button type="button" text="Cancel" />
      </span>
    </div>
  );
};

export default WritingGroupMenuItemEdit;
