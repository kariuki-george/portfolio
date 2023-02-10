import { cva, VariantProps } from "cva";
import React from "react";

const iconStyles = cva(
  "mx-1 text-sm text-primary flex items-center text-center justify-center",
  {
    variants: {
      hoverable: {
        true: "hover:bg-background-tertiary rounded-md cursor-pointer p-1 px-2",
      },
    },
  }
);

export interface IconProps extends VariantProps<typeof iconStyles> {
  icon: React.ReactNode;
}

const Icon = (props: IconProps) => {
  return <div className={iconStyles(props)}>{props.icon}</div>;
};

export default Icon;
