import { gql } from '@apollo/client';

export default gql`
  query {
    posts {
      id
      title
      content
    }
  }
`;
