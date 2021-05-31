import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
    {
        markdownRemark(fileAbsolutePath: { regex: "/common/" }) {
            frontmatter {
                contactData {
                    facebook
                    instagram
                    mail
                    tel
                    vk
                }
            }
        }
    }
`;

const useCommon = () => {
    const data = useStaticQuery(query);
    const fields = data.markdownRemark.frontmatter.contactData;
    return {
        social: [
            { facebook: fields.facebook },
            { instagram: fields.instagram },
            { vk: fields.vk },
        ],
        mail: fields.mail,
        tel: fields.tel,
    };
};

export default useCommon;
