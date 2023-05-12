import { Injectable } from '@nestjs/common';
import { CreateCatDto } from '../dto/create-cat.dto';
import { Cats } from '../cats.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cats)
    private usersRepository: Repository<Cats>,
  ) {}
  static findAll() {
    throw new Error('Method not implemented.');
  }
  findAll():
    | import('../interfaces/cat.interface').Cat[]
    | PromiseLike<import('../interfaces/cat.interface').Cat[]> {
    throw new Error('Method not implemented.');
  }
  create(createCatDto: CreateCatDto) {
    throw new Error('Method not implemented.');
  }
}
