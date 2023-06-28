// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
//  */

// /**
//  * @type {import('gatsby').GatsbyNode['createPages']}
//  */
// const { graphql } = require('gatsby');

// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions;
//   createPage({
//     path: "/wp_page",
//     component: require.resolve("./src/templates/wp_page.js"),
//     context: {},
//     defer: true,
//   });
// };
const { graphql } = require('gatsby');

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allWordpressPage {
        nodes {
          slug
        }
      }
    }
  `);

  if (result.errors) {
    console.error("Error retrieving WordPress pages:", result.errors);
    return;
  }

  const pages = result.data.allWordpressPage.nodes;

  pages.forEach(page => {
    createPage({
      path: `/${page.slug}`,
      component: require.resolve("./src/templates/wp_page.js"),
      context: {
        slug: page.slug,
      },
    });
  });
};
