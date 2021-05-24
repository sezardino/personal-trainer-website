import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
    query {
        markdownRemark(fileAbsolutePath: { regex: "/seo-data.md/" }) {
            frontmatter {
                name
                description
                images {
                    apple_touch_icon {
                        publicURL
                    }
                    fav_16 {
                        publicURL
                    }
                    fav_32 {
                        publicURL
                    }
                    mask_icon {
                        publicURL
                    }
                }
            }
        }
    }
`;

const useMeta = () => {
    const data = useStaticQuery(query);
    const fields = data.markdownRemark.frontmatter;
    return {
        name: fields.name,
        description: fields.description,
        images: fields.images,
    };
};

export default useMeta;
