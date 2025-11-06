import { Module } from '@nestjs/common';
import { ResumeService } from './resume.service';
import { SanityModule } from 'src/sanity/sanity.module';
import { ResumeController } from './resume.controller';

@Module({
  controllers: [ResumeController],
  providers: [ResumeService],
  imports: [SanityModule],
})
export class ResumeModule {}
