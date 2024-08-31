// src/queries/multipleSubgraphsQuery.js
import createApolloClient from '../utils/apolloClient';
import { gql } from '@apollo/client';

const client1 = createApolloClient('https://api.thegraph.com/subgraphs/name/subgraph1');
const client2 = createApolloClient('https://api.thegraph.com/subgraphs/name/subgraph2');

const multipleSubgraphsQuery = async () => {
  const result1 = await client1.query({
    query: gql`
      {
        pairs(first: 5) {
          id
        }
      }
    `,
  });

  const result2 = await client2.query({
    query: gql`
      {
        tokens(first: 5) {
          id
          symbol
        }
      }
    `,
  });

  console.log({ subgraph1: result1.data, subgraph2: result2.data });
};

export default multipleSubgraphsQuery;
