import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const link = createHttpLink({
  uri: process.env.API_URL,
  credentials: 'include'
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
});

export default client;
