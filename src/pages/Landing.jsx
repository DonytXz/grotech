import React from "react";
import Header from "../components/UI_Elements/Header";
import Footer from "../components/UI_Elements/Footer";
import Hero from "../components/Landing/Hero";
import Services from "../components/Landing/Services";
import Contact from "../components/Landing/Contact";

const Landing = () => {
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="absolute w-screen h-full max-h-[820px] z-0 rounded-b-4xl md:rounded-b-[20rem]  xl:rounded-b-[35rem]"
          src="./hero.png"
          alt=""
          srcSet=""
        />
        <Header />
        <Hero />
      </div>
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default Landing;
