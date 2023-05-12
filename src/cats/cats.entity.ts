import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cats {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column({ default: true })
  breed: string;

  @Column()
  CreatedAt: Date;

  @Column()
  UpdatedAt: Date;

  @Column()
  DeletedAt: Date;
}

console.log('------------------');
