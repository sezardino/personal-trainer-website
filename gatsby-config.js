module.exports = {
    siteMetadata: {
        title: "v3",
    },
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-sharp",
        "gatsby-plugin-react-helmet",
        "gatsby-transformer-remark",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "cms-content",
                path: "./content/",
            },
            __key: "cms-content",
        },
        {
            resolve: "gatsby-plugin-netlify-cms",
            options: {
                manualInit: true,
                modulePath: `${__dirname}/src/cms/cms.js`,
            },
        },
        "gatsby-plugin-netlify",
    ],
};
