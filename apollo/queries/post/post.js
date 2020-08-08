import gql from "graphql-tag"; 
const POST_QUERY= gql` 
query Post($id: ID!) {
    post(id: $id) {
      id
      Title
      Content
      Published
      tags {
        Name
      }
    }
  }
`;
export default POST_QUERY;