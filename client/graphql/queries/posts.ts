import { gql } from '@apollo/client';

export default gql`
  query ($newest: Boolean!, $offset: Int!, $limit: Int!) {
    posts(newest: $newest, offset: $offset, limit: $limit) {
      id
      title
      content
      createdAt
      author {
        id
        username
        createdAt
      }
    }
  }
`;
