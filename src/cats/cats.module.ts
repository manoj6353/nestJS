import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cats } from './cats.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cats])],
  exports: [TypeOrmModule],
})
export class CatsModule {}

console.log('=================');
