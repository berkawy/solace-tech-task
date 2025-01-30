import { ApolloClient, InMemoryCache } from '@apollo/client';
const port = import.meta.env.VITE_APP_PORT || 3000;

const client = new ApolloClient({
  uri: `http://localhost:${port}/graphql`,
  cache: new InMemoryCache(),
});

export default client;
