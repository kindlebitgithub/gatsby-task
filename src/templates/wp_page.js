import React from 'react';

const PageTemplate = ({ data }) => {
  const page = data.wordpressPage;

  return (
    <div>
      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
    </div>
  );
};

export const query = graphql`
  query($slug: String!) {
    wordpressPage(slug: { eq: $slug }) {
      title
      content
    }
  }
`;

export default PageTemplate;
