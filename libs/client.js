import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'miyadai-bad',
  apiKey: process.env.API_KEY,
});