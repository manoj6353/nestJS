import { Injectable } from '@nestjs/common';
import { CreatephotoDto } from '../dto/create-photo.dto';
import { Photos } from '../entity/photo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PhotosService {
  constructor(
    @InjectRepository(Photos)
    private usersRepository: Repository<Photos>,
  ) {}
  static findAll() {
    throw new Error('Method not implemented.');
  }
  findAll():
    | import('../interfaces/cat.interface').Cat[]
    | PromiseLike<import('../interfaces/photo.interface').Photo[]> {
    throw new Error('Method not implemented.');
  }
  create(createPhotoDto: CreatephotoDto) {
    throw new Error('Method not implemented.');
  }
}
