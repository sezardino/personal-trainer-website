import { Link } from "gatsby";
import React from "react";

const BlogItem = ({ data }) => {
    const { title, excerpt, date, thumbnail, slug } = data;

    const excerptContent =
        excerpt.length >= 300 ? `${excerpt.slice(0, 300)}...` : excerpt;

    return (
        <article className="blog-item">
            <Link to={slug} className="blog-item__img-wrapper">
                <img
                    src={thumbnail.childImageSharp.fluid.src}
                    alt=""
                    className="blog-item__img"
                />
            </Link>
            <div className="blog-item__wrapper">
                <h3 className="blog-item__title">
                    <Link to="some">{title}</Link>
                </h3>
                <p className="blog-item__time">
                    <span className="hidden">data publikacji wpisu</span>
                    <time dateTime={date}>{date}</time>
                </p>
                <p className="blog-item__excerpt">{excerptContent}</p>
                <Link to={slug} className="blog-item__link">
                    Czytaj więcej
                </Link>
            </div>
        </article>
    );
};

export default BlogItem;
