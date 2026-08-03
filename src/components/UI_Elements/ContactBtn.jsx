import React from "react";
import { ToastContainer, toast } from "react-toastify";

const ContactBtn = ({ css, txt, setData, invalid }) => {
  const handleBtn = () => {
    if (txt != "Contacto") {
      if (invalid) {
        setData({
          mail: "",
          message: "",
          clicked: true,
        });
      } else {
        //TODO Call toast
        toast("Mensaje enviado correctamente", {
          position: "bottom-right",
        });
      }
    }
  };

  return (
    <>
      {txt == "Contacto" && (
        <a
          href="#contact"
          className={`${css} bg-primary hover:bg-primary-light active:bg-primary-dark rounded-2xl py-2 px-4`}
        >
          {txt}
        </a>
      )}
      {txt == "Enviar" && (
        <button
          onClick={handleBtn}
          className={`${css} bg-primary hover:bg-primary-light active:bg-primary-dark rounded-2xl py-2 px-4`}
        >
          {txt}
        </button>
      )}
      <ToastContainer />
    </>
  );
};

export default ContactBtn;
