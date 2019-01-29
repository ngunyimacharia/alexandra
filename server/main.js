import { WebApp } from 'meteor/webapp';
import { getUser } from 'meteor/apollo';

import { ApolloServer } from 'apollo-server-express';

import typeDefs from '../imports/api/schema';
import resolvers from '../imports/api/resolvers';

import '../imports/api/eits.js';
import '../imports/api/users.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => ({
    user: await getUser(req.header.authorization)
  })
});

server.applyMiddleware({
  app: WebApp.connectHandlers,
  path: '/graphql'
})

WebApp.connectHandlers.use('/graphql',(req,res) => {
  if(req.method === 'GET'){
    res.end()
  }
})
