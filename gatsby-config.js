module.exports = {
    siteMetadata: {
        title: "Robert Arechwa - Trener Personalny",
        description: `Hej, mam na imie Robert Arechwa, jestem trenerem personalnym, pomoge ci zadbać o swoją sylwetke.
        Prowadze treningi personalne, oraz mogę rospisać dla ciebię diete`,
    },
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-sharp",
        "gatsby-plugin-react-helmet",
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
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 600,
                        },
                    },
                ],
            },
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
