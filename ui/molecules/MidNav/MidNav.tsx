import { cva, VariantProps } from "cva";
import React from "react";
import Header, { HeaderProps } from "../Header/Header";

const midNavStyles = cva("w-screen h-full  flex flex-col items-start  p-3");

export interface MidNavProps extends VariantProps<typeof midNavStyles> {
  headerProps: HeaderProps;
  children: React.ReactNode;
}

const MidNav = (props: MidNavProps) => {
  return (
    <div className={midNavStyles()}>
      <Header {...props.headerProps} underline={true} />
      {props.children}
    </div>
  );
};

export default MidNav;
