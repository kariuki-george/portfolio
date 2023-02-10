import NavItem from "@/ui/molecules/NavItem";
import { NavItemProps } from "@/ui/molecules/NavItem/NavItem";
import { cva, VariantProps } from "cva";
import React from "react";
import clsx from "clsx";

const navStyles = cva(
  clsx(
    " z-10  max-w-[350px] h-full  w-full  ",
    "border border-text-secondary rounded-md shadow-sm shadow-gray-100"
  )
);

export interface NavProps extends VariantProps<typeof navStyles> {
  navItems: NavItemProps[];
}

const Nav = (props: NavProps) => {
  return (
    <ul className={navStyles()}>
      {props.navItems.map((item, index) => (
        <li key={index}>
          <NavItem {...item} />
        </li>
      ))}
    </ul>
  );
};

export default Nav;
