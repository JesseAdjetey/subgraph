// src/queries/variablesQuery.js
import createApolloClient from '../utils/apolloClient';
import { gql } from '@apollo/client';

const client = createApolloClient('https://api.thegraph.com/subgraphs/name/example/subgraph');

const variablesQuery = async (first) => {
  const result = await client.query({
    query: gql`
      query GetPairs($first: Int!) {
        pairs(first: $first) {
          id
          reserve0
        }
      }
    `,
    variables: { first },
  });
  console.log(result.data);
};

export default variablesQuery;
