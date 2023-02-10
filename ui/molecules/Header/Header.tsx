import { cva, VariantProps } from "cva";
import React from "react";
import clsx from "clsx";
import Icons from "@/ui/atoms/Icons";
import Text from "@/ui/atoms/Text";

const headerProps = cva(
  clsx(
    "text-text-primary w-full",
    "my-1 p-1 px-3 rounded-md",
    "flex items-center gap-3 "
  ),
  {
    variants: {
      hovable: { true: "hover:bg-background-secondary cursor-pointer " },
      bg: { true: "bg-background-tertiary" },
      underline: { true: "border-b border-text-primary rounded-none pb-3" },
    },
  }
);

export interface HeaderProps extends VariantProps<typeof headerProps> {
  text: string;
  icon?: React.ReactNode;
}

const Header = (props: HeaderProps) => {
  return (
    <div className={headerProps(props)}>
      {props.icon && <Icons icon={props.icon} />}
      <Text text={props.text} />
    </div>
  );
};

export default Header;
