import { Link } from "gatsby";
import React from "react";

const Nav = (props) => {
  const { extraClass } = props;

  return (
    <nav className={`nav ${extraClass && `nav--${extraClass}`}`}>
      <ul className="nav__list">
        <li className="nav__item">
          <Link to="/" className="nav__link">
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/about" className="nav__link">
            About
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/products" className="nav__link">
            Products
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/blog" className="nav__link">
            Blog
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/contact" className="nav__link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
