import React from "react";
import { Link } from "gatsby";
import Tel from "./tel";

const Nav = (props) => {
  const { extraClass } = props;

  return (
    <nav className={`nav ${extraClass && `nav--${extraClass}`}`}>
      <ul className="nav__list">
        <li className="nav__item">
          <Link to="/" className="nav__link">
            Strona główna
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/about" className="nav__link">
            O mnie
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/products" className="nav__link">
            Oferta
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/blog" className="nav__link">
            Blog
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/contact" className="nav__link">
            Kontakt
          </Link>
        </li>
      </ul>
      {extraClass === "header" && <Tel />}
    </nav>
  );
};

export default Nav;
