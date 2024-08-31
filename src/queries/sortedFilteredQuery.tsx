// src/queries/sortedFilteredQuery.js
import createApolloClient from '../utils/apolloClient';
import { gql } from '@apollo/client';

const client = createApolloClient('https://api.thegraph.com/subgraphs/name/example/subgraph');

const sortedFilteredQuery = async () => {
  const result = await client.query({
    query: gql`
      {
        pairs(first: 5, orderBy: reserve0, orderDirection: desc) {
          id
          reserve0
        }
      }
    `,
  });
  console.log(result.data);
};

export default sortedFilteredQuery;
