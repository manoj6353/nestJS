import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { PhotosModule } from './photos/photos.module';
import { dataSourceOptions } from 'db/data-source';
import { CatsController } from '../src/cats/cats.controller';
import { CatsService } from '../src/cats/cats.service';
// import { Cat } from '../src/cats/entities/cat.entity';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), CatsModule],
  controllers: [CatsController],
  providers: [CatsService],
})
export class AppModule {}
