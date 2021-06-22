import React from "react";
import BlogItem from "../parts/blog-item";

import Hero from "../sections/hero";

export const BlogPage = ({ data }) => {
    const {
        sections: { hero },
        posts,
    } = data;

    return (
        <>
            <Hero data={hero} />
            <section className="blog-page container">
                <h2 className="hidden">Posty</h2>
                <ul className="blog__list">
                    {posts.map(({ node }) => {
                        const postData = {
                            title: node.frontmatter.title,
                            excerpt: node.frontmatter.excerpt,
                            thumbnail: node.frontmatter.thumbnail,
                            slug: node.fields.slug,
                        };
                        return (
                            <li className="blog__item" key={node.id}>
                                <BlogItem data={postData} />
                            </li>
                        );
                    })}
                </ul>
            </section>
        </>
    );
};

export default BlogPage;
