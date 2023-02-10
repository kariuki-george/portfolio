import Icon from "@/ui/atoms/Icons/Icon";
import Text from "@/ui/atoms/Text";
import { cva } from "cva";
import React from "react";
import clsx from "clsx";
import { Pencil2Icon, TrashIcon } from "@radix-ui/react-icons";

const writingGroupMenuItemListStyles = cva("flex justify-between ");

const WritingGroupMenuItemList = () => {
  return (
    <div className={writingGroupMenuItemListStyles()}>
      <Text text="text" />
      <span className={clsx("flex", "")}>
        <Icon icon={<Pencil2Icon />} hoverable={true} />
        <Icon icon={<TrashIcon />} hoverable={true} />
      </span>
    </div>
  );
};

export default WritingGroupMenuItemList;
