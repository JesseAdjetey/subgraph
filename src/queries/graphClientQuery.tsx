// src/queries/graphClientQuery.js
import { graphClient } from '../utils/graphClientSetup';

const graphClientQuery = async () => {
  const response = await graphClient.query({
    query: `
      {
        pairs(first: 5) {
          id
          reserve0
          reserve1
        }
      }
    `,
  });
  console.log(response.data);
};

export default graphClientQuery;
