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
    author_id: ID
    title: String!
    content: String!
    date: String!
    contributors: [ID]
    is_deleted: Boolean!
    story_type: String!
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

    myStories(email: String!): [Story]
    otherStories: [Story]
    uniqueContributions(email: String!): [Story]
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    removeProfile: Profile
    removeSkill(skill: String!): Profile

    addStory(author_id: ID!, content: String!, title: String!, story_type: String): Story
  }
`;

module.exports = typeDefs;