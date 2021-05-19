import { graphql, useStaticQuery } from "gatsby";

const useMeta = () => {
  const {
    markdownRemark: { frontmatter },
  } = useStaticQuery(
    graphql`
      query {
        markdownRemark(fileAbsolutePath: { regex: "/meta.md/" }) {
          frontmatter {
            name
            lang
            description
            og {
              descr
              title
              image {
                publicURL
              }
            }
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
    `
  );

  return {
    title: frontmatter.name,
    lang: frontmatter.lang,
    description: frontmatter.description,
    og: frontmatter.og,
    img: frontmatter.images,
  };
};

export default useMeta;
