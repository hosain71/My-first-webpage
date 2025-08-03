import React from "react";
import Hosain from "../assets/Images/hosain.jpg";
const Banar = () => {
  return (
    <div className="bg-white/5">
        <div className="container mx-auto ">
      <div className="flex justify-between bg-[#040000fb] md:flex-row flex-col text-white ">
        <div className="">
          <div>
            <h1 className="text-4xl m-5 ">Hello</h1>
          </div>
          <h1 className="text-3xl m-5 hover:scale-110 scale-100 duration-300  ">I'm Hosain Ahmad</h1>
          <h1 className="text-5xl m-5">Software Developer</h1> <br />
          <div className="flex gap-8 m-5">
            <button className="border p-3">Got a project</button>
            <button className="border-3 cursor-pointer text-balance p-3">
              Got a project
            </button>
          </div>
        </div>

        <div>
          <img
            className=" md:w-100 h-100 justify-between m-5 hover:scale-110 scale-100 duration-300 rounded-full "
            src={Hosain}
            alt=""
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Banar;
