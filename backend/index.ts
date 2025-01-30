require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');

const userSchema = require('./graphql/schema/userSchema.ts');
const userResolvers = require('./graphql/resolvers/userResolver.ts');

const app = express();

const port = process.env.PORT || 3000;

const server = new ApolloServer({
  typeDefs: userSchema,
  resolvers: userResolvers,
  introspection: true,
  playground: true,
});

app.use(cors());

const startServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/graphql`);
  });
};

startServer();
