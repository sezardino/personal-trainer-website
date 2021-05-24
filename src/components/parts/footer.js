import React from "react";

import Logo from "./logo";
import Social from "./social";
import Nav from "./nav";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container footer__container">
          <div className="footer__logo">
            <Logo />
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
