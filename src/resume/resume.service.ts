import { Injectable } from '@nestjs/common';
import { SanityService } from '../sanity/sanity.service';
import { Experience } from '../types/resume.type';

@Injectable()
export class ResumeService {
  constructor(private readonly sanityService: SanityService) {}
  async fetchExperiences(): Promise<any> {
    try {
      const data = await this.sanityService.fetchContent<Experience[]>(
        `*[_type == "experiences"]| order(_createdAt desc)`,
      );
      return data;
    } catch (error) {
      console.error('Error fetching data from Sanity:', error);
      throw error;
    }
  }

  async fetchFacts(): Promise<any> {
    try {
      const data = await this.sanityService.fetchContent(
        `*[_type == "facts"]| order(_createdAt desc)`,
      );
      return data;
    } catch (error) {
      console.error('Error fetching data from Sanity:', error);
      throw error;
    }
  }
}
