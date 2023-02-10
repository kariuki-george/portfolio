import { cva, VariantProps } from "cva";
import React from "react";
import Header from "../Header";
import { HeaderProps } from "../Header/Header";

const navItemStyles = cva("", {
  variants: {
    section: { true: "mt-4 font-bold" },
  },
});

export interface NavItemProps
  extends HeaderProps,
    VariantProps<typeof navItemStyles> {}

const NavItem = (props: NavItemProps) => {
  return (
    <div className={navItemStyles(props)}>
      <Header {...props} />
    </div>
  );
};

export default NavItem;
