import React from "react";
import services from "../../assets/serives.json";
import Service from "../Landing/Services/Service";

const Services = () => {
  return (
    <>
      <section className="bg-whitep-4 lg:p-16 rounded-[4rem]">
        <h2 className="font-[Frank_Ruhl_Libre] text-center text-5xl font-medium text-[#2D5605]">Servicios</h2>
        {/* <div className="flex flex-col lg:flex-row justify-around"> */}
        <div className="grid grid-cols-2 lg:grid-cols-5">
          {services.data.map((service, index) => (
            <div key={index}>
              <Service text={service.text} path={service.img} />
            </div>
          ))}
        </div>
      </section>
    </>
  );

};

export default Services;
