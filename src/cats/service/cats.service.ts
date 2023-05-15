import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Photo } from 'src/photos/entities/photo.entity';
import { UpdateCatDto } from '../dto/update-cat.dto';
const prisma = new PrismaClient();
@Injectable()
export class CatsService {
  async create(createCatDto) {
    try {
      const photos = await prisma.cat.create({
        data: {
          name: createCatDto.name,
          breed: createCatDto.breed,
          age: createCatDto.age,
          photos: {
            create: {
              photo: createCatDto.photos.photo,
            },
          },
        },
      });
      return photos;
    } catch (err) {
      console.log(err);
    }
  }

  findAll() {
    return prisma.cat.findMany({
      include: { photos: true },
    });
  }

  findOne(id: number) {
    return prisma.cat.findFirst({
      include: { photos: true },
      where: { id: id },
    });
  }

  update(id: number, updateCatDto) {
    return prisma.cat.update({
      where: { id: id },
      data: {
        ...updateCatDto,
      },
    });
  }

  remove(id: number) {
    return prisma.cat.delete({
      where: { id: id },
    });
  }
}
