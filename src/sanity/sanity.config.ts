import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || '',
  dataset: 'production',
  apiVersion: '2021-10-14',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN || '',
});
