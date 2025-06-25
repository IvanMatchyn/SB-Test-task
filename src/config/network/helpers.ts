import { OPENAI_API_KEY } from '@env';

import { NetworkService } from './index.ts';

export const setupNetworkClients = () => {
  NetworkService.createClient('openai', 'https://api.openai.com/v1', {
    Authorization: `Bearer ${OPENAI_API_KEY}`,
  });
};

setupNetworkClients();
