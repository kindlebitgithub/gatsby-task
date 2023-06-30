/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
const axios = require('axios');
const path = require('path');
const fs = require('fs');

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/about-us",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;

//   // Query your data using GraphQL
//   // ...

//   // Loop through the queried data
//   // ...

//   // Download media files and create pages
//   await Promise.all(
//     data.allPosts.edges.map(async (post) => {
//       const { id, slug, mediaUrls } = post.node;

//       // Create a directory for the post's media files
//       const mediaDirectory = `./static/media/${slug}`;
//       if (!fs.existsSync(mediaDirectory)) {
//         fs.mkdirSync(mediaDirectory, { recursive: true });
//       }

//       // Download and save media files
//       await Promise.all(
//         mediaUrls.map(async (mediaUrl) => {
//           // Check if the file extension is a media file
//           const fileExtension = path.extname(mediaUrl).toLowerCase();
//           const mediaExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
//           if (!mediaExtensions.includes(fileExtension)) {
//             // File is not a media file, ignore it
//             console.log(`Ignoring file: ${mediaUrl}`);
//             return;
//           }

//           const mediaFilename = path.basename(mediaUrl);
//           const mediaFilePath = `${mediaDirectory}/${mediaFilename}`;

//           try {
//             const response = await axios.get(mediaUrl, { responseType: 'stream' });
//             const writer = fs.createWriteStream(mediaFilePath);
//             response.data.pipe(writer);

//             await new Promise((resolve, reject) => {
//               writer.on('finish', resolve);
//               writer.on('error', reject);
//             });

//             console.log(`Downloaded file: ${mediaUrl}`);
//           } catch (error) {
//             console.error(`Error downloading file: ${mediaUrl}`, error);
//           }
//         })
//       );

//   const { createPage } = actions
//   createPage({
//     path: "/about-us",
//     component: require.resolve("./src/templates/using-dsg.js"),
//     context: {},
//     defer: true,
//   })
//     })
//   );
// };
// exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
//   const config = getConfig();
//   const { module } = config;

//   // Exclude media files from being processed
//   module.rules = module.rules.map((rule) => {
//     if (String(rule.test) === String(/\.(ico|svg|jpg|jpeg|png|gif|webp)(\?.*)?$/)) {
//       const { exclude } = rule;
//       rule.exclude = typeof exclude === 'string' ? [exclude] : exclude.concat(/\/(path\/to\/ignore)\/.*/);
//     }
//     return rule;
//   });

//   // Update the webpack config
//   actions.replaceWebpackConfig(config);
// };
// exports.onCreateNode = ({ node, actions }) => {
//   const { createNode } = actions;

//   // Check if the node is of type "MediaItem" from gatsby-source-wordpress
//   if (node.internal.type === "MediaItem" && node.sourceUrl) {
//     // Check if the sourceUrl is not null
//     if (node.sourceUrl !== null) {
//       // Create a new node with the modified path
//       const newNode = {
//         ...node,
//         path: node.sourceUrl,
//       };

//       // Create the new node
//       createNode(newNode);
//     }
//   }
// };
// // Add the following code inside the `gatsby-node.js` file in your project

// exports.createResolvers = ({ createResolvers }) => {
//   createResolvers({
//     WPGraphQL_MediaItem: {
//       imageFile: {
//         async resolve(source, args, context, info) {
//           const imageUrl = source.sourceUrl;
//           if (imageUrl.startsWith('https://tgibfnov2022.click/wp-content/uploads/')) {
//             // Exclude the media item from being downloaded
//             return null;
//           }
//           // Download the media item as usual
//           return context.defaultFieldResolvers.WPGraphQL_MediaItem.imageFile.resolve(
//             source,
//             args,
//             context,
//             info
//           );
//         },
//       },
//     },
//   });
// };



