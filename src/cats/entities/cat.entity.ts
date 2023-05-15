import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Photo } from '../../photos/entities/photo.entity';
@Entity()
export class Cat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  breed: string;

  @Column()
  age: number;

  @OneToMany((type) => Photo, (photo) => photo.cats)
  photos: Photo[];
}
