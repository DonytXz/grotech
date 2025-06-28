import React from "react";
import ContactBtn from "../UI_Elements/ContactBtn";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row w-full h-full xl:px-32 ">
        <div className="h-2/3 relative lg:h-full w-full lg:w-1/2 order-2 lg:order-1">
          <img
            className="mx-auto lg:absolute w-72 lg:w-11/12 xl:w-full max-h-[686px] max-w-[656px] z-10 pb-0 md:pb-2 xl:pb-8"
            src="./farmer.png"
            alt=""
            srcSet=""
          />
        </div>
        <div className="flex flex-col w-full h-1/3 lg:h-full lg:w-1/2 my-auto order-1 lg:order-2 mx-auto">
          <h1 className="font-[Albert_Sans] mx-auto lg:mx-0 lg:mt-36 z-10 text-5xl text-center lg:text-left xl:text-6xl font-medium text-white bottom-0">
            Monitoreando el futuro
            <br />
            <span className="text-7xl xl:text-8xl font-bold">del campo</span>
          </h1>
          <div className="z-10 flex mt-6">
            <ContactBtn css={"mx-auto lg:mr-auto lg:ml-0"} txt={"Contacto"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
