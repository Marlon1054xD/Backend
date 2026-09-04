import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Pelicula } from '../../peliculas/entities/pelicula.entity';

@Entity('generos')
export class Genero {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100, unique: true })
  nombre!: string;

  @OneToMany(() => Pelicula, (pelicula) => pelicula.genero)
  peliculas!: Pelicula[];
}