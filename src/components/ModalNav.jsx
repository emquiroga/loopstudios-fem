import React from "react";
import ReactDOM from "react-dom";

import Logo from "../assets/images/logo.svg";

const ModalNav = ({ onClose }) => {
  return (
    <div className="modal-bg">
      <div className="top-wrapper">
        <img src={Logo} alt="Logo" />
        <button className="close-button" onClick={onClose}>
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z"
              fill="#FFF"
              fill-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="container">
        <div className="links-wrapper">
          <a href="/">ABOUT</a>
          <a href="/">CAREERS</a>
          <a href="/">EVENTS</a>
          <a href="/">PRODUCTS</a>
          <a href="/">SUPPORT</a>
        </div>
      </div>
    </div>
  );
};
export default function MobileMenu({ onClose }) {
  return ReactDOM.createPortal(
    <ModalNav onClose={onClose} />,
    document.getElementById("portal")
  );
}
