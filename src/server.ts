'use strict';

import { ApolloServer, gql } from 'apollo-server';

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// The GraphQL schema
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => helloWorld(),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(PORT, HOST).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});


function helloWorld(): string {
  return 'hello world';
}