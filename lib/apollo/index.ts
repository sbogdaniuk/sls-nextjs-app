import { withData } from 'next-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { SchemaLink } from 'apollo-link-schema'
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools'

import { mocks } from './mocks'
import { typeDefs } from './typeDefs'

// Make a GraphQL schema with no resolvers
const schema = makeExecutableSchema({ typeDefs })

addMockFunctionsToSchema({
  schema,
  mocks,
})

const config = {
  cache: new InMemoryCache(),
  link: new SchemaLink({ schema }),
}

export const withApollo = withData(config)
