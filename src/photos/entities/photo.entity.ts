import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Cat } from '../../cats/entities/cat.entity';
@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  photo: string;

  @Column()
  catsId: number;

  @ManyToOne((type) => Cat, (cat) => cat.id)
  cat: Cat;
}
