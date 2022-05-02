import React from "react";
import About from "./About";
import Skills from "./Skills";

import White from "../../layouts/White";
const index = () => {
  return (
    <div className="  bg-transpatent text-black-500   ">
      <section className="max-w-[1100px]   m-auto bg-transparent">
      <About />
      <Skills />
    
      </section>
    
    </div>
  );
};

index.getLayout = (page:typeof index)=>{
  return <White>{page}</White>
}
export default index;


