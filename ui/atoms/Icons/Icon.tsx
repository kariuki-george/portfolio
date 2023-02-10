import { cva, VariantProps } from "cva";
import React from "react";

const iconStyles = cva("m-1 text-sm text-primary");

export interface IconProps extends VariantProps<typeof iconStyles> {
  icon: React.ReactNode;
}

const Icon = (props: IconProps) => {
  return <div className={iconStyles()}>{props.icon}</div>;
};

export default Icon;
