import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Pelicula } from '../../peliculas/entities/pelicula.entity';

@Entity('directores')
export class Director {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100 })
  nombre!: string;

  @Column({ length: 100 })
  apellido!: string;

  @OneToMany(() => Pelicula, (pelicula) => pelicula.director)
  peliculas!: Pelicula[];
}