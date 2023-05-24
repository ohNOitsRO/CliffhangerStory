const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    skills: [String]!
  }

  type Story {
    author_id: Profile
    title: String!
    content: String!
    date: String!
    contributors: [ID]
   
    story_type: String!
  }

  type Continuations {
    main_story: ID
    main_author: ID!
    cont_name: String!
    cont_author: ID!
    is_deleted: Boolean!
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile

    myStories(email: String! title: String!): [Story] 
    publicStories: [Story]
    uniqueContributions(email: String!): [Story]
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    removeProfile: Profile
    removeStory(story_id: ID!): Profile

    addStory(author_id: ID!, content: String!, title: String!, story_type: String): Story
    addCont(main_story: ID!, main_author: String!, cont_name: String!, cont_author: ID!): Continuations
  }
`;

module.exports = typeDefs;