// /**
//  * Configure your Gatsby site with this file.
//  *
//  * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
//  */

// /**
//  * @type {import('gatsby').GatsbyConfig}
//  */
// const { resolve } = require('path');
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
//         display: `minimal-ui`,
//         icon: `src/images/gatsby-icon.png`, 
//       },
//     },
//     {
//       resolve: `gatsby-source-wordpress`,
//       options: {
//         url: `http://getsby.kindlebit.com/graphql`, 
        
//         // url: `https://tgibfnov2022.click/graphql`, 
//         schema: {
//           perPage: 20,
//           requestConcurrency: 5,
//           previewRequestConcurrency: 2,
//         },
//         develop: {
//           hardCacheMediaFiles: true,
//         },
//         type: {
//           MediaItem: {
//             localFile: {
//               requestConcurrency: 10,
//             },
//           },
//         },
//         debug: {
//           graphql: {
//             showQueryVarsOnError: true,
//           },
//         },
//       },
//     },
//   ],
// };
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
const { resolve } = require('path');
module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
<<<<<<< HEAD
        url: `https://tgibfnov2022.click/graphql`, // Update the URL here

=======
        //url: `http://getsby.kindlebit.com/graphql`, 
        
         url: `https://tgibfnov2022.click/graphql`, 
>>>>>>> 19cbb07bea7ac204a584ab57898573885c91d70b
        schema: {
          perPage: 20,
          requestConcurrency: 5,
          previewRequestConcurrency: 2,
        },
        develop: {
          hardCacheMediaFiles: true,
        },
        type: {
          MediaItem: {
            localFile: {
              requestConcurrency: 10,
            },
          },
        },
        debug: {
          graphql: {
            showQueryVarsOnError: false,
          },
        },
      },
    },
  ],
};
