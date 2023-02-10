import { cva, VariantProps } from "cva";
import React from "react";
import Header, { HeaderProps } from "../Header/Header";
import MobileMenu from "../MobileMenu";

const midNavStyles = cva("w-screen h-full  flex flex-col items-start  p-3");

export interface MidNavProps extends VariantProps<typeof midNavStyles> {
  headerText: string;
  children: React.ReactNode;
}

const MidNav = (props: MidNavProps) => {
  return (
    <div className={midNavStyles()}>
      <Header text={props.headerText} icon={<MobileMenu />} underline={true} />
      <div className="p-3 w-full">{props.children}</div>
    </div>
  );
};

export default MidNav;
