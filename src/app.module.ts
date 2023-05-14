import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dataSourceOptions } from 'db/data-source';
import { PhotosModule } from './photos/photos.module';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), CatsModule, PhotosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
