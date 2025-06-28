import React from "react";
import ContactBtn from './ContactBtn'

const Header = () => {
  return (
    <>
      <header className="relative flex p-4 h-32 flex-col">
        <div className="w-1/2">
        {/* TODO transform logo img to h1 to better seo as is the company name */}
          <img className="absolute z-10 w-36 h-11" src="./logo.png" alt="" srcSet="" />
        </div>
        <div className="w-1/2">
            <ContactBtn css={"absolute right-4"} txt="Contacto"/>
        </div>
      </header>
    </>
  );
};

export default Header;
