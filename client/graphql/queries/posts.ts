import { gql } from '@apollo/client';

export default gql`
  query {
    posts {
      content
      title
    }
  }
`;
