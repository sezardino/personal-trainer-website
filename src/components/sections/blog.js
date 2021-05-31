import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import BlogItem from "../parts/blog-item";

const query = graphql`
    {
        allMarkdownRemark(
            limit: 3
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
            sort: { fields: frontmatter___date }
        ) {
            edges {
                node {
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        excerpt
                        date(formatString: "ll")
                        thumbnail {
                            childImageSharp {
                                fluid(quality: 100) {
                                    src
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

const Blog = ({ data }) => {
    const {
        allMarkdownRemark: { edges },
    } = useStaticQuery(query);
    const { label, title } = data;
    return (
        <section className="blog">
            <div className="container blog__container">
                <h2 className="blog__title">{title}</h2>
                <ul className="blog__list">
                    {edges.map(({ node }) => {
                        const postData = {
                            title: node.frontmatter.title,
                            excerpt: node.frontmatter.excerpt,
                            date: node.frontmatter.date,
                            thumbnail: node.frontmatter.thumbnail,
                            slug: node.fields.slug
                        };
                        return (
                            <li className="blog__item" key={node.id}>
                                <BlogItem data={postData} />
                            </li>
                        );
                    })}
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
