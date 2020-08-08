import gql from "graphql-tag"; 
const POST_QUERY= gql` 
query Post { 
    posts {
        id
        Title
        Published
      }
  } 
`; 
export default POST_QUERY;