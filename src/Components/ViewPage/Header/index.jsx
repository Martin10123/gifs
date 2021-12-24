import React from "react";
import logo from "../../../images/logoDesktop.svg";

import "./header.css";

const Header = ({ isDark, toggleDarkMode }) => {
  return (
    <header className="header_class">
      <img src={logo} alt="logo de imagen" />
      <button onClick={toggleDarkMode} className="btn_header">{`Modo ${
        isDark ? "Light" : "Dark"
      }`}</button>
    </header>
  );
};

export default Header;
