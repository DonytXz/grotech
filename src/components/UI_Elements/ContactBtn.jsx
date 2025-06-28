import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const ContactBtn = ({ css, txt, disabled = false }) => {
  const navigate = useNavigate();
  const handleBtn = (e) => {
    if (txt != "Contacto") {
      //TODO Call toast
      toast("Mensaje enviado correctamente", {
        position: "bottom-right",
      });
    } else if (disabled) {
      // toast.warn("Completa tus datos", {
      //   position: "bottom-right",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: false,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      //   transition: Bounce,
      // });
    }
  };

  return (
    <>
      <HashLink
        to="#contact"
        scroll={(el) => el.scrollIntoView({ behavior: "auto", block: "end" })}
      >
        <button
          disabled={disabled}
          onClick={handleBtn}
          className={`${css} ${
            disabled ? "" : "bg-gray-500"
          } bg-primary hover:bg-primary-light active:bg-primary-dark rounded-2xl py-2 px-4`}
        >
          {txt}
        </button>
      </HashLink>
      <ToastContainer />
    </>
  );
};

export default ContactBtn;
