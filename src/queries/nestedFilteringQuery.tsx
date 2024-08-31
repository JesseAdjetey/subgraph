// src/queries/nestedFilteringQuery.js
import createApolloClient from '../utils/apolloClient';
import { gql } from '@apollo/client';

const client = createApolloClient('https://api.thegraph.com/subgraphs/name/example/subgraph');

const nestedFilteringQuery = async () => {
  const result = await client.query({
    query: gql`
      {
        users(where: {transactions_: {value_gt: "1000"}}) {
          id
          transactions {
            id
            value
          }
        }
      }
    `,
  });
  console.log(result.data);
};

export default nestedFilteringQuery;
