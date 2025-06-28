import React from "react";
import ContactBtn from "./ContactBtn";

const Footer = () => {
  return (
    <>
      <footer className="relative flex p-4 h-32 w-full flex-row bg-seconday text-white">
        <div className="w-1/3 my-auto font-[Avenir] font-normal text-base">
          ® GROTECH 2025
        </div>
        <div className="w-1/3 my-auto">
          <p className="text-center font-[Avenir] font-normal text-base">
            Monitoriando el campo del futuro
          </p>
        </div>
        <div className="w-1/3 flex">
          <img
            className="z-10 ml-auto w-36 h-11 my-auto"
            src="./logo.png"
            alt=""
            srcSet=""
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;
