import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Suscripcion } from '../../suscripciones/entities/suscripcion.entity';
import { Perfil } from '../../perfiles/entities/perfiles.entity';
import { Favorito } from '../../favoritos/entities/favorito.entity';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100 })
  nombre!: string;

  @Column({ length: 150, unique: true })
  email!: string;

  @Column({ length: 255 })
  password!: string;

  @ManyToOne(() => Suscripcion, {
    nullable: false,
  })
  @JoinColumn({ name: 'suscripcion_id' })
  suscripcion!: Suscripcion;

  @OneToMany(() => Perfil, (perfil) => perfil.usuario)
  perfiles!: Perfil[];

  @OneToMany(() => Favorito, (favorito) => favorito.usuario)
  favoritos!: Favorito[];
}