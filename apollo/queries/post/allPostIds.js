import gql from "graphql-tag"; 
const POSTS_ID_QUERY= gql` 
query Post { 
    posts {
        id
      }
  } 
`; 
export default POSTS_ID_QUERY;