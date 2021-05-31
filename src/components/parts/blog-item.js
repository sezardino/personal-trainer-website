import { Link } from "gatsby";
import React from "react";
import img from "../../assets/img/blog-image.jpg";

const BlogItem = ({ data }) => {
    console.log(data);
    const { title, excerpt, date, thumbnail, slug } = data;
    return (
        <article className="blog-item">
            <img
                src={thumbnail.childImageSharp.fluid.src}
                alt=""
                className="blog-item__img"
            />
            <div className="blog-item__wrapper">
                <h3 className="blog-item__title">
                    <Link to="some">{title}</Link>
                </h3>
                <p className="blog-item__time">
                    <span className="hidden">data publikacji wpisu</span>
                    <time dateTime={date}>{date}</time>
                </p>
                <p className="blog-item__excerpt">{excerpt}</p>
                <Link to={slug} className="blog-item__link">
                    Czytaj więcej
                </Link>
            </div>
        </article>
    );
};

export default BlogItem;
