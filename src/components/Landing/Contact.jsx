import React, { useState } from "react";
import ContactBtn from "../UI_Elements/ContactBtn";

const Contact = () => {
  const [formData, setFormData] = useState({
    mail: "",
    message: "",
    clicked: false,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <section
        id="contact"
        className="flex flex-col lg:flex-row px-4 py-16 lg:p-16"
      >
        <div className="w-full lg:w-1/2 p-2 lg:p-0">
          <h2 className="text-[#2D5605] font-[Frank_Ruhl_Libre] font-bold text-4xl">
            Contactanos
          </h2>
          <p className="text-[#2D5605] font-[Albert_Sans] font-normal text-2xl">
            Solicita más información o una cotización. Nosotros te buscamos.
          </p>
        </div>
        <div className="flex p-0 lg:p-8 w-full lg:w-1/2">
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <div className="flex flex-col">
                <label className="p-2 text-[#2D5605]" htmlFor="">
                  Correo
                </label>
                <input
                  className="p-2 bg-white"
                  placeholder="correo@correo.com"
                  onChange={(e) =>
                    setFormData({ ...formData, mail: e.target.value })
                  }
                  value={formData.mail}
                />
                {formData.mail == "" && formData.clicked && (
                  <p className="text-red-500">Este campo es obligatorio</p>
                )}
              </div>
              <div className="flex flex-col">
                <label className="p-2 text-[#2D5605]" htmlFor="">
                  Mensaje
                </label>
                <textarea
                  className="p-2 bg-white h-18"
                  placeholder="Mensaje"
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  value={formData.message}
                ></textarea>
                {formData.message == "" && formData.clicked && (
                  <p className="text-red-500">Este campo es obligatorio</p>
                )}
              </div>
            </div>
            <div className="pt-4">
              <ContactBtn
                invalid={formData.mail == "" || formData.message == ""}
                setData={setFormData}
                css={""}
                txt={"Enviar"}
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
