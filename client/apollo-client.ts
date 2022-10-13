import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const link = createHttpLink({
  uri: process.env.NODE_ENV === 'production' ? 'https://tsuquil-server.herokuapp.com/graphql' : 'http://localhost:9000/graphql',
  credentials: 'include'
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
});

export default client;
