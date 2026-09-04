import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PerfilesController } from './perfiles.controller';
import { PerfilesService } from './perfiles.service';
import { Perfil } from './entities/perfiles.entity';
import { Usuario } from '../usuarios/entities/usuarios.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Perfil, Usuario]),
  ],
  controllers: [PerfilesController],
  providers: [PerfilesService],
  exports: [PerfilesService],
})
export class PerfilesModule {}