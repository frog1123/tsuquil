import { gql } from '@apollo/client';

export default gql`
  mutation ($title: String!, $content: String) {
    createPost(title: $title, content: $content)
  }
`;
