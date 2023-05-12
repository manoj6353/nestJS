import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photos } from '../entity/photo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Photos])],
  exports: [TypeOrmModule],
})
export class PhotosModule {}
