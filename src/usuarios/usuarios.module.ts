import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './entities/usuarios.entity';
import { Suscripcion } from '../suscripciones/entities/suscripcion.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario, Suscripcion]),
  ],
  controllers: [UsuariosController],
  providers: [UsuariosService],
  exports: [UsuariosService],
})
export class UsuariosModule {}