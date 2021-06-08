import React from "react";

import Hero from "../sections/hero";

export const PostPage = ({ data }) => {
    console.log(data);
    const { title, thumbnail, excerpt } = data.markdownRemark.frontmatter;
    const heroProps = {
        title,
        image: thumbnail,
        description: excerpt,
    };
    return (
        <>
            <Hero data={heroProps} extraClass="post" />
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
