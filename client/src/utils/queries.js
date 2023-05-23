import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      skills
    }
  }
`;

// ONE DAY WE WILL FUNCTIONALIZE THIS ICEBOX MONGOOSE TOP CRUISE GUN MAVERICK
export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      skills
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      myStories
    }
  }
`;

export const QUERY_STORIES = gql`
  query publicStories {
    publicStories {
    author_id
    title
    content
    date
    story_type
    }
  }
`;