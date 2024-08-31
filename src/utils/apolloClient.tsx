// src/utils/apolloClient.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

const createApolloClient = (uri) => {
  return new ApolloClient({
    uri,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
