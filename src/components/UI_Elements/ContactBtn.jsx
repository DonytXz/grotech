import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const ContactBtn = ({ css, txt, setData, invalid }) => {
  const navigate = useNavigate();
  const handleBtn = (e) => {
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
        <HashLink
          to="#contact"
          className={`${css} bg-primary hover:bg-primary-light active:bg-primary-dark rounded-2xl py-2 px-4`}
          scroll={(el) => el.scrollIntoView({ behavior: "auto", block: "end" })}
        >
          {txt}
        </HashLink>
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
