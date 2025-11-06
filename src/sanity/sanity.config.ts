import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'fwt4q6hd',
  dataset: 'production',
  apiVersion: '2021-10-14',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN || '',
});
