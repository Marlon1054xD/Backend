import {
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Usuario } from '../../usuarios/entities/usuarios.entity';
import { Pelicula } from '../../peliculas/entities/pelicula.entity';

@Entity('favoritos')
export class Favorito {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.favoritos, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'usuario_id' })
  usuario!: Usuario;

  @ManyToOne(() => Pelicula, (pelicula) => pelicula.favoritos, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'pelicula_id' })
  pelicula!: Pelicula;
}