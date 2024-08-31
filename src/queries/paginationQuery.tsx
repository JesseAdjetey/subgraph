// src/queries/paginationQuery.js
import createApolloClient from '../utils/apolloClient';
import { gql } from '@apollo/client';

const client = createApolloClient('https://api.thegraph.com/subgraphs/name/example/subgraph');

const paginationQuery = async () => {
  const result = await client.query({
    query: gql`
      {
        pairs(first: 1000, where: {id_gt: "some-id"}) {
          id
          reserve0
        }
      }
    `,
  });
  console.log(result.data);
};

export default paginationQuery;
