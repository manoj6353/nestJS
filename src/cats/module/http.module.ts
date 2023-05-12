import { Module } from '@nestjs/common';
import { CatsModule } from '../cats.module';
import { CatsService } from '../services/cats.service';
import { PhotosService } from '../services/photos.service';
import { PhotosModule } from './photos.module';

@Module({
  imports: [CatsModule, PhotosModule],
  providers: [CatsService, PhotosService],
})
export class HttpModule {}
