import gql from "graphql-tag"; 
const PROJECT_QUERY= gql` 
query Project($id: ID!) {
    project(id: $id) {
      id
      Title
      Image {
        url
      }
      Url
      Description
    }
  }
`; 
export default PROJECT_QUERY;