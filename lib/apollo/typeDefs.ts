import { gql } from 'apollo-boost'

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
  }

  type Query {
    users: [User]!
    user(id: ID!): User!
  }
`
