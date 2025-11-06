import { Controller, Get } from '@nestjs/common';
import { ResumeService } from './resume.service';

@Controller('resume')
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}
  @Get('facts')
  findAllFacts() {
    return this.resumeService.fetchFacts();
  }

  @Get('experiences')
  findAllExperiences() {
    return this.resumeService.fetchExperiences();
  }
}
