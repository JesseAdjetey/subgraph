// src/utils/graphClientSetup.js
import { createClient } from '@graphprotocol/graph-client';

export const graphClient = createClient({
  url: 'https://api.thegraph.com/subgraphs/name/example/subgraph',
});
