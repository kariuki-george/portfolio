import Header from "@/ui/molecules/Header";
import MidNav from "@/ui/molecules/MidNav/MidNav";
import React from "react";
import { DropdownMenu } from "./jjjj";

const WriteMenu = () => {
  return (
    <div className="">
      <MidNav
        headerProps={{
          text: "Writing",
          icon: <DropdownMenu />,
        }}
      >
        <>
          <Header text="one" hovable={true} />
          <Header text="one" hovable={true} />
          <Header text="one" hovable={true} />
        </>
      </MidNav>
    </div>
  );
};

export default WriteMenu;
