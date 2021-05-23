import { Link } from "gatsby";
import React from "react";

const About = () => {
  return (
    <section className="about">
      <div className="container about__container">
        <div className="about__description">
          <h2 className="about__title">Dlaczego ja</h2>
          <p className="about__text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
            consequatur nulla praesentium doloremque voluptatibus optio
            asperiores quod neque iure, similique omnis animi ab odio incidunt
            dolorum et cumque repellendus repudiandae accusamus atque modi
            excepturi molestias nam officiis. Quaerat placeat possimus
            consectetur animi eligendi esse in blanditiis eum libero, aspernatur
            perspiciatis
          </p>
          <Link to="/about" className="button button--primary about__button">
            więcej o mnie
          </Link>
        </div>
        <div className="about__image-wrapper"></div>
      </div>
    </section>
  );
};

export default About;
