import { Injectable } from '@nestjs/common';
import { CreatePhotoDto } from '../dto/create-photo.dto';
import { UpdatePhotoDto } from '../dto/update-photo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from '../entities/photo.entity';
@Injectable()
export class PhotosService {
  constructor(
    @InjectRepository(Photo)
    private Photorepository: Repository<Photo>,
  ) {}
  async create(createPhotoDto: CreatePhotoDto): Promise<Photo> {
    try {
      const example = await this.Photorepository.create(createPhotoDto);
      return await this.Photorepository.save(example);
    } catch (err) {
      console.log(err);
    }
  }

  findAll() {
    return `This action returns all photos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} photo`;
  }

  update(id: number, updatePhotoDto: UpdatePhotoDto) {
    return `This action updates a #${id} photo`;
  }

  remove(id: number) {
    return `This action removes a #${id} photo`;
  }
}
