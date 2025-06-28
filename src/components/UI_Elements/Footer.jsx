import React from "react";
import ContactBtn from "./ContactBtn";

const Footer = () => {
  return (
    <>
      <footer className="relative flex py-8 lg:py-4 p-4 h-full w-full flex-col lg:flex-row bg-seconday text-white">
        <div className="w-full lg:w-1/3 py-2 my-auto mx-auto text-center lg:text-left font-[Avenir] font-normal text-base">
          ® GROTECH 2025
        </div>
        <div className="w-full lg:w-1/3 py-2 my-auto mx-auto text-center">
          <p className="font-[Avenir] font-normal text-base">
            Monitoriando el campo del futuro
          </p>
        </div>
        <div className="w-full lg:w-1/3 py-2 flex mx-auto lg:ml-auto text-center">
          <img
            className="mx-auto  z-10 lg:ml-auto lg:mr-0 w-36 h-11 my-auto"
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
