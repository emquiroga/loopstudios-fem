import React from "react";
import Logo from "../assets/images/logo.svg";

const Navbar = () => {
  return (
    <nav>
      <img srcSet={Logo} alt="" />
      <svg width="24" height="16" xmlns="http://www.w3.org/2000/svg">
        <g fill="#FFF" fill-rule="evenodd">
          <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" />
        </g>
      </svg>
    </nav>
  );
};

export default Navbar;