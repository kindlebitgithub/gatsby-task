/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
// module.exports = {
//   siteMetadata: {
//     title: `Gatsby Default Starter`,
//     description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
//     author: `@gatsbyjs`,
//     siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
//   },
//   plugins: [
//     `gatsby-plugin-image`,
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         name: `images`,
//         path: `${__dirname}/src/images`,
//       },
//     },
//     `gatsby-transformer-sharp`,
//     `gatsby-plugin-sharp`,
//     {
//       resolve: `gatsby-plugin-manifest`,
//       options: {
//         name: `gatsby-starter-default`,
//         short_name: `starter`,
//         start_url: `/`,
//         background_color: `#663399`,
//         // This will impact how browsers show your PWA/website
//         // https://css-tricks.com/meta-theme-color-and-trickery/
//         // theme_color: `#663399`,
//         display: `minimal-ui`,
//         icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
//       },
//     },
//   ],
// }

// module.exports = {
//   siteMetadata: {
//     title: "Gatsby Default Starter",
//     description:
//       "Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",
//     author: "@gatsbyjs",
//     siteUrl: "https://tgibfnov2022.click/about-us/", // Replace with your site URL
//   },
//   plugins: [
//     {
//       resolve: "gatsby-source-wordpress",
//       options: {
//         // baseUrl: "http://dev1.kindlebit.com/Development/getsbysync/", // Your WordPress site URL
//         url: "https://tgibfnov2022.click/about-us/", 
//         protocol: "https",
//         hostingWPCOM: false,
//         useACF: false,
//         verboseOutput: true,
//         perPage: 100,
//         debug: {
//           graphql: {
//             copyHtmlResponseOnError: true
//           }
//         },
//         concurrentRequests: 10,
//         includedRoutes: [
//           "**/pages",
//           "**/categories",
//           "**/posts",
//           "**/media",
//           "**/tags",
//           "**/taxonomies",
//           "**/users",
//         ],
//       },
//     },
//     "gatsby-transformer-sharp",
//     "gatsby-plugin-sharp",
//     "gatsby-image",
//   ],
// };

module.exports = {
  siteMetadata: {
    title: "Gatsby Default Starter",
    description:
      "Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",
    author: "mintu",
    // siteUrl: "https://tgibfnov2022.click/about-us/", // Replace with your site URL
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        // baseUrl:"https://tgibfnov2022.click/",
        // url: "https://wpgatsbydemo.wpengine.com/graphql",
        // url: "https://tgibfnov2022.click/graphql",
        url :"https://gatsbystarterdefaultsource.gatsbyjs.io/graphql",
        // url:"https://tgibfnov2022.click/graphql",
        protocol: "https",
        hostingWPCOM: false,
        useACF: false,
        schema: {
          perPage: 20, 
          requestConcurrency: 5, 
          previewRequestConcurrency: 2,
        },
        verboseOutput: true,
              
        // perPage: 100,
        // debug: {
        //   graphql: {
        //     copyHtmlResponseOnError: true,
        //   },
        // },
        // concurrentRequests: 10,
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
        // ignore: [
        //   `**/uploads/**`, // Ignore any folder named "uploads" within the specified path
        //   `**/*.@(jpg|jpeg|png|gif)`, // Ignore image files with jpg, jpeg, png, or gif extensions
        //   `https://tgibfnov2022.click/**/*.@(jpg|jpeg|png|gif)`, // Ignore all images from the "tgibfnov2022.click" website
        // ],
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `WPGraphQL`,
        fieldName: `wpgraphql`,
        // url: `https://tgibfnov2022.click/graphql`,
         url: "https://wpgatsbydemo.wpengine.com/graphql", // Provide the base URL of your WordPress GraphQL API
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    // "gatsby-plugin-image",
  ],
};


