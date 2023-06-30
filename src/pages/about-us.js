import React from "react";
import { graphql } from "gatsby";

const AboutUsPage = ({ data }) => {
  const page = data?.wpgraphql?.pageBy;
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
