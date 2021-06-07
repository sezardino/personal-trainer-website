import React from "react";

import Hero from "../sections/hero";

export const PostPage = ({ data }) => {
    const { title, hero } = data.markdownRemark.frontmatter;
    console.log(data);
    // const { hero, blog } = sections;
    return (
        <>
            <Hero data={hero} />
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
