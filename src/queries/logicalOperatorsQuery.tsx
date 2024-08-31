// src/queries/logicalOperatorsQuery.js
import createApolloClient from '../utils/apolloClient';
import { gql } from '@apollo/client';

const client = createApolloClient('https://api.thegraph.com/subgraphs/name/example/subgraph');

const logicalOperatorsQuery = async () => {
  const result = await client.query({
    query: gql`
      {
        pairs(first: 5, where: {reserve0_gt: "1000", reserve1_lt: "500"}) {
          id
          reserve0
          reserve1
        }
      }
    `,
  });
  console.log(result.data);
};

export default logicalOperatorsQuery;
