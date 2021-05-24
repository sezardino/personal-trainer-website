import { Link } from "gatsby";
import React from "react";
import img from "../../assets/img/blog-image.jpg";

const BlogItem = () => {
  return (
    <article className="blog-item">
      <img src={img} alt="" className="blog-item__img" />
      <div className="blog-item__wrapper">
        <h3 className="blog-item__title">
          <Link to="some">Nazwa Wpisu</Link>
        </h3>
        <p className="blog-item__time">
          <span className="hidden">data publikacji wpisu</span>
          <time dateTime="2001-05-15 19:00">15.04.2021</time>
        </p>
        <p className="blog-item__excerpt">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
        </p>
        <Link to="some" className="blog-item__link">
          Czytaj więcej
        </Link>
      </div>
    </article>
  );
};

export default BlogItem;
