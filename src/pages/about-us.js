import React from "react";
import { graphql } from "gatsby";

const AboutUsPage = ({ data }) => {
//   const page = data.allWordpressPage.nodes[0];
  const page = data?.wpgraphql?.pageBy;
// const page = data?.wpgraphql?.postBy;
  console.log(data)
  if(!page){
    return(
        <diV>Page not found</diV>
    )
  }

  return (
    <div>
      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
    </div>
  );
};

// export const query = graphql`
//   query {
//     allWordpressPage(filter: { slug: { eq: "about-us" } }) {
//       nodes {
//         title
//         content
//       }
//     }
//   }
// `;
 // wordpressPage(slug: { eq: "about-us" }) {
// export const query = graphql`
//   query AboutUsQuery {
   
//     wordpressPage(slug: {}) {
//       title
//       content
//     }
//   }
// `;
//      pageBy(uri: "https://crew-code.com/create-gatsby-wordpress-portfolio-website/") {
    //   pageBy(uri: "/about-us/") {
        //https://wpgraphqldemo.wpengine.com
        //   postBy(slug: "fulvic-acid-facts") {
            // "https://activatedprobiotics.oxdigital.com.au/graphql",
            // /   const page = data.allWordpressPage.nodes[0];
            // pageBy(uri: "https://tgibfnov2022.click/about-us") {
              // https://gatsby-starter-blog-demo.netlify.app/
//   const page = data?.wpgraphql?.pageBy;
// const page = data?.wpgraphql?.postBy;
export const query = graphql`
  query AboutUsQuery {
    wpgraphql {
      pageBy(uri: "https://gatsby-starter-blog-demo.netlify.app/") {
        title
        slug
        content
      }
    }
  }
`;

export default AboutUsPage;
