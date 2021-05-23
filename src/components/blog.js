import { Link } from "gatsby";
import React from "react";
import BlogItem from "./blog-item";

const Blog = () => {
  return (
    <section className="blog">
      <div className="container blog__container">
        <h2 className="blog__title">Ostatnie Wpisy</h2>
        <ul className="blog__list">
          <li className="blog__item">
            <BlogItem />
          </li>
          <li className="blog__item">
            <BlogItem />
          </li>
          <li className="blog__item">
            <BlogItem />
          </li>
        </ul>
        <Link to="/blog" className="button button--primary blog__button">
          wszystkie wpisy
        </Link>
      </div>
    </section>
  );
};

export default Blog;
