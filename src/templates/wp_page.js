// import React from 'react';

// const PageTemplate = ({ data }) => {
//   const page = data.wordpressPage;

//   return (
//     <div>
//       <h1>{page.title}</h1>
//       <div dangerouslySetInnerHTML={{ __html: page.content }} />
//     </div>
//   );
// };

// export const query = graphql`
//   query($slug: String!) {
//     wordpressPage(slug: { eq: $slug }) {
//       title
//       content
//     }
//   }
// `;

// export default PageTemplate;

import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const PageTemplate = ({ data }) => {
  const page = data.wordpressPage;
  const featuredImage = getImage(page.featuredImage);

  return (
    <div>
      <h1>{page.title}</h1>
      {featuredImage && <GatsbyImage image={featuredImage} alt="Featured" />}
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
    </div>
  );
};

export const query = graphql`
  query($slug: String!) {
    wordpressPage(slug: { eq: $slug }) {
      title
      content
      featuredImage {
        localFile {
          childImageSharp {
            gatsbyImageData(
              width: 800
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`;

export default PageTemplate;
