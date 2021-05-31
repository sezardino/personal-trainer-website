import React from "react";

import Hero from "../sections/hero";

export const PostPage = ({ data }) => {
    const {
        date,
        excerpt: description,
        title,
        thumbnail: image,
    } = data.markdownRemark.frontmatter;
    const heroProps = {
        description,
        image,
        title,
        date,
    };
    // const { hero, blog } = sections;
    return (
        <>
            <Hero data={heroProps} />
            <section className="container post">
                <h2 className="hidden">{title}</h2>
                <div
                    className="post__content"
                    dangerouslySetInnerHTML={{
                        __html: data.markdownRemark.html,
                    }}
                ></div>
            </section>
        </>
    );
};

export default PostPage;
