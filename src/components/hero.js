import React from "react";
import Social from "./social";

const Hero = ({ image }) => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
      <div className="container hero__container">
        <h1 className="hero__title">
          <span className="hero__title-line"><span className="hero__title-frst">R</span>obert</span>
          <span className="hero__title-line"><span className="hero__title-frst">A</span>rechwa</span>
          <span className="hero__title-line hero__title-line--last">
            trener personalny
          </span>
        </h1>
        <div className="hero__social">
          <Social extraClass="hero"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
