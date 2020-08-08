import gql from "graphql-tag"; 
const PROJECT_QUERY= gql` 
  query Project { 
    projects {
        id
        Title
        Image {
          url
        }
      }
  } 
`; 
export default PROJECT_QUERY;