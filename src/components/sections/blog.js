import { Link } from "gatsby";
import React from "react";
import BlogItem from "../parts/blog-item";

const Blog = ({ data }) => {
    const { label, title } = data;
    return (
        <section className="blog">
            <div className="container blog__container">
                <h2 className="blog__title">{title}</h2>
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
                <Link
                    to="/blog"
                    className="button button--primary blog__button"
                >
                    {label}
                </Link>
            </div>
        </section>
    );
};

export default Blog;
