import React from "react";
import PropTypes from "prop-types";

export const MyPageTemplate = ({
  content
}) => {
  return (
    <div>
      <h1>My header</h1>
      <article>
        <h2>Heading</h2>
        <span>{content}</span>
      </article>
    </div>
  );
}
const MyPage = ({
  data: {
    markdownRemark: { frontmatter }
  }
}) => {
  const { content } = frontmatter;

  return (
    <MyPageTemplate content={content} />
  );
};

export default MyPage;

export const myPageQuery = graphql`
  query MyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        content
      }
    }
  }
`