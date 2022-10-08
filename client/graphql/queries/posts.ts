import { gql } from '@apollo/client';

export default gql`
  query ($newest: Boolean!) {
    posts(newest: $newest) {
      id
      title
      content
    }
  }
`;
