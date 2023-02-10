import { cva, VariantProps } from "cva";
import React from "react";
import clsx from "clsx";

const inputStyles = cva(
  clsx(
    "rounded-md p-1 px-3 m-1 ",
    "border border-text-secondary outline-none",
    "bg-background-primary"
  )
);

export interface InputProps extends VariantProps<typeof inputStyles> {
  placeHolder: string;
  value: string;
  /**
   * TAKES THE INPUT EVENT
   */
  onChange: (e: any) => void;
  type: React.HTMLInputTypeAttribute;
}

const Input = (props: InputProps) => {
  return <input {...props} className={inputStyles()} />;
};

export default Input;
