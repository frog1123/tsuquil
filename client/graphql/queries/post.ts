import { gql } from '@apollo/client';

export default gql`
  query ($postId: ID!) {
    post(id: $postId) {
      title
      content
      createdAt
      author {
        username
      }
    }
  }
`;
