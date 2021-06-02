import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layouts/withoutSeo";
import Hero from "../components/sections/hero";

const NotFoundPage = ({data}) => {
    return (
        <Layout>
            <Hero data={data.markdownRemark.frontmatter.hero}/>
        </Layout>
    );
};

const query = graphql`
    query {
        markdownRemark(fileAbsolutePath: { regex: "/404/" }) {
            frontmatter {
                hero {
                    description
                    title
                    image {
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
`;

export { query };
export default NotFoundPage;
