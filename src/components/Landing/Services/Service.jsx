import React from "react";

const Service = ({ text, path }) => {
  return (
    <>
      <div className="flex flex-col p-6 lg:p-12">
        <div>
          <img className="w-20 h-20 mx-auto" src={path} alt="" srcSet="" />
        </div>
        <div>
          <h3 className="text-[#2D5605] mt-2 text-center font-[Albert_Sans] font-medium text-2xl">{text}</h3>
        </div>
      </div>
    </>
  );
};

export default Service;
