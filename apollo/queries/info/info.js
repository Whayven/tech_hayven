import gql from 'graphql-tag';

const INFO_QUERY=gql`
query Info {
    info {
      id
      Firstname
      Lastname
      Title
      Image {
        url
      }
      Bio
      skills {
        Name
      }
    }
  }
`;

export default INFO_QUERY;