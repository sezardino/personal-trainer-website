import React from "react";

import Hero from "../sections/hero";

export const PostPage = ({ data }) => {
    console.log(data);
    const { title, thumbnail } = data.markdownRemark.frontmatter;
    const heroProps = {
        title,
        image: thumbnail,
    };
    return (
        <>
            <Hero data={heroProps} extraClass="post" />
            <section className="container post">
                <h2 className="hidden">{title}</h2>
                <div
                    className="post__content typography"
                    dangerouslySetInnerHTML={{
                        __html: data.markdownRemark.html,
                    }}
                ></div>
            </section>
        </>
    );
};

export default PostPage;
