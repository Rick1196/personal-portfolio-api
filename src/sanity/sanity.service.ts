import { Injectable } from '@nestjs/common';
import { client } from './sanity.config'; // Adjust path as needed

@Injectable()
export class SanityService {
  async fetchContent<T>(query: string): Promise<T> {
    try {
      const data: T = await client.fetch(query);
      return data;
    } catch (error) {
      console.error('Error fetching data from Sanity:', error);
      throw error;
    }
  }
}
