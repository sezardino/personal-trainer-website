import React from "react";

import logo from "../img/logo.svg";
import Social from "./social";
import Nav from "./nav";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container footer__container">
          <div className="footer__logo">
            <img
              src={logo}
              alt="Kaldi"
              style={{ width: "14em", height: "10em" }}
            />
          </div>
          <div className="footer__wrapper">
            <div className="footer__nav">
              <Nav extraClass='footer'/>
            </div>
            <div className="footer__social">
              <Social />
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
