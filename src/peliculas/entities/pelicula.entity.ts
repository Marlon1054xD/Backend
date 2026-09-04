import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Genero } from '../../generos/entities/genero.entity';
import { Director } from '../../directores/entities/director.entity';

@Entity('peliculas')
export class Pelicula {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 200 })
  titulo!: string;

  @Column()
  anioEstreno!: number;

  @Column()
  duracion!: number;

  @ManyToOne(() => Genero, (genero) => genero.peliculas, {
    nullable: false,
  })
  @JoinColumn({ name: 'genero_id' })
  genero!: Genero;

  @ManyToOne(() => Director, (director) => director.peliculas, {
    nullable: false,
  })
  @JoinColumn({ name: 'director_id' })
  director!: Director;
}