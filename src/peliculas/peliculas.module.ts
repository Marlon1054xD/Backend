import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PeliculasController } from './peliculas.controller';
import { PeliculasService } from './peliculas.service';
import { Pelicula } from './entities/pelicula.entity';

import { Genero } from '../generos/entities/genero.entity';
import { Director } from '../directores/entities/director.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Pelicula,
      Genero,
      Director,
    ]),
  ],
  controllers: [PeliculasController],
  providers: [PeliculasService],
})
export class PeliculasModule {}