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
          clicked: true
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
      <HashLink
        to="#contact"
        scroll={(el) => el.scrollIntoView({ behavior: "auto", block: "end" })}
      >
        <button
          onClick={handleBtn}
          className={`${css} bg-primary hover:bg-primary-light active:bg-primary-dark rounded-2xl py-2 px-4`}
        >
          {txt}
        </button>
      </HashLink>
      <ToastContainer />
    </>
  );
};

export default ContactBtn;
