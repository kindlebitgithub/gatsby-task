/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: "Gatsby Default Starter",
    description:
      "Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",
    author: "mintu",
   
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
       
        url :"https://gatsbystarterdefaultsource.gatsbyjs.io/graphql",
       
        protocol: "https",
        hostingWPCOM: false,
        useACF: false,
        schema: {
          perPage: 20, 
          requestConcurrency: 5, 
          previewRequestConcurrency: 2,
        },
        verboseOutput: true,
        includedRoutes: [
          "**/about-us/",
          "**/pages",
          "**/categories",
          "**/posts",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
        ],
      
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `WPGraphQL`,
        fieldName: `wpgraphql`,
     
         url: "https://wpgatsbydemo.wpengine.com/graphql",
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
  ],
};


