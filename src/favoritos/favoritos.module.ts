import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Favorito } from './entities/favorito.entity';
import { FavoritosService } from './favoritos.service';
import { FavoritosController } from './favoritos.controller';

import { Usuario } from '../usuarios/entities/usuarios.entity';
import { Pelicula } from '../peliculas/entities/pelicula.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Favorito,
      Usuario,
      Pelicula,
    ]),
  ],
  controllers: [FavoritosController],
  providers: [FavoritosService],
})
export class FavoritosModule {}