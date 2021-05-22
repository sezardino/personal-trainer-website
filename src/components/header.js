import { Link } from "gatsby";
import React, { useState } from "react";
import logo from "../img/logo.svg";
import Nav from "./nav";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const clickHandler = () => {
    setMenu(!menu);
  };

  return (
    <header class="header">
      <div className="container header__container">
        <div className="header__logo">
          <Link to="/" className="logo" title="Logo">
            <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
          </Link>
        </div>
        <div className="header__menu-open">
          <button
            className={`menu-open ${menu && "menu-open--opened"}`}
            onClick={clickHandler}
            data-target="navMenu"
          >
            <span className="menu-open__line" />
            <span className="menu-open__line" />
            <span className="menu-open__line" />
          </button>
        </div>
        <div
          className={`header__nav ${menu && "header__nav--open"}`}
          id="navMenu"
        >
          <Nav extraClass="header" />
        </div>
      </div>
    </header>
  );
};

export default Header;
