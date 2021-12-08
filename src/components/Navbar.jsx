import React, { useState } from "react";
import Logo from "../assets/images/logo.svg";
import MobileMenu from "./ModalNav";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleModal() {
    setIsOpen(!isOpen);
  }
  return (
    <nav>
      <img srcSet={Logo} alt="" />
      <button onClick={handleModal}>
        {" "}
        <svg width="24" height="16" xmlns="http://www.w3.org/2000/svg">
          <g fill="#FFF" fill-rule="evenodd">
            <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" />
          </g>
        </svg>
      </button>
      {isOpen && <MobileMenu onClose={handleModal} />}
    </nav>
  );
};

export default Navbar;
