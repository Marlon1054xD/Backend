import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Usuario } from '../../usuarios/entities/usuarios.entity';

@Entity('suscripciones')
export class Suscripcion {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 50, unique: true })
  nombre!: string;

  @Column()
  maxPerfiles!: number;

  @OneToMany(() => Usuario, (usuario) => usuario.suscripcion)
  usuarios!: Usuario[];
}