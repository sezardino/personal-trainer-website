import { Link } from "gatsby";
import React from "react";

const BlogItem = ({ data }) => {
    const { title, excerpt, thumbnail, slug } = data;

    const excerptContent =
        excerpt.length >= 300 ? `${excerpt.slice(0, 300)}...` : excerpt;

    return (
        <article className="blog-item">
            <Link to={slug} className="blog-item__img-wrapper">
                <img
                    src={thumbnail.childImageSharp.fluid.src}
                    alt={title}
                    className="blog-item__img"
                />
            </Link>
            <div className="blog-item__wrapper">
                <h3 className="blog-item__title">
                    <Link to={slug}>{title}</Link>
                </h3>
            </div>
        </article>
    );
};

export default BlogItem;
