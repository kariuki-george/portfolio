import { cva, VariantProps } from "cva";
import React from "react";
import clsx from "clsx";

const textStyles = cva(clsx("font-md"), {
  variants: {
    intent: {
      text: "text-text-primary",
      link: clsx("text-green-300"),
    },
  },
  defaultVariants: {
    intent: "text",
  },
});

interface Props {
  text: string;
}

export interface TextProps extends Props, VariantProps<typeof textStyles> {}

const Text = (props: TextProps) => {
  return (
    <div className={textStyles({ ...props })} {...props}>
      {props.text}
    </div>
  );
};

export default Text;
