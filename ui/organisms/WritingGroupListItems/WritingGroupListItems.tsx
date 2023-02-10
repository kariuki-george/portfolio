import { cva, VariantProps } from "cva";
import React from "react";
import clsx from "clsx";
import Loader from "@/ui/molecules/Loader";
import WritingGroupMenuItemEdit from "@/ui/molecules/WritingGroupMenuItemEdit";
import WritingGroupMenuItemList from "@/ui/molecules/WritingGroupMenuItemList";

const writingGroupListItems = cva("");

export interface WritingGroupListItemsProps
  extends VariantProps<typeof WritingGroupListItems> {}

const WritingGroupListItems = () => {
  return (
    <div>
      {/* Loading */}
      <Loader />
      {/* Creating/updating */}
      <WritingGroupMenuItemEdit />
      {/* views */}
      <WritingGroupMenuItemList />
    </div>
  );
};

export default WritingGroupListItems;
