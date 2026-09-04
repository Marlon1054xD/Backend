import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Pelicula } from './entities/pelicula.entity';
import { CreatePeliculaDto } from './dto/create-pelicula.dto';
import { UpdatePeliculaDto } from './dto/update-pelicula.dto';

import { Genero } from '../generos/entities/genero.entity';
import { Director } from '../directores/entities/director.entity';

@Injectable()
export class PeliculasService {
  constructor(
    @InjectRepository(Pelicula)
    private readonly peliculaRepository: Repository<Pelicula>,

    @InjectRepository(Genero)
    private readonly generoRepository: Repository<Genero>,

    @InjectRepository(Director)
    private readonly directorRepository: Repository<Director>,
  ) {}

  async create(createPeliculaDto: CreatePeliculaDto) {
    const genero = await this.generoRepository.findOne({
      where: { id: createPeliculaDto.generoId },
    });

    if (!genero) {
      throw new NotFoundException('El género no existe');
    }

    const director = await this.directorRepository.findOne({
      where: { id: createPeliculaDto.directorId },
    });

    if (!director) {
      throw new NotFoundException('El director no existe');
    }

    const pelicula = this.peliculaRepository.create({
      titulo: createPeliculaDto.titulo,
      anioEstreno: createPeliculaDto.anioEstreno,
      duracion: createPeliculaDto.duracion,
      genero,
      director,
    });

    return await this.peliculaRepository.save(pelicula);
  }

  async findAll() {
    return await this.peliculaRepository.find({
      relations: {
        genero: true,
        director: true,
      },
    });
  }

  async findOne(id: number) {
    const pelicula = await this.peliculaRepository.findOne({
      where: { id },
      relations: {
        genero: true,
        director: true,
      },
    });

    if (!pelicula) {
      throw new NotFoundException('La película no existe');
    }

    return pelicula;
  }

  async update(
    id: number,
    updatePeliculaDto: UpdatePeliculaDto,
  ) {
    const pelicula = await this.findOne(id);

    if (updatePeliculaDto.generoId) {
      const genero = await this.generoRepository.findOne({
        where: { id: updatePeliculaDto.generoId },
      });

      if (!genero) {
        throw new NotFoundException('El género no existe');
      }

      pelicula.genero = genero;
    }

    if (updatePeliculaDto.directorId) {
      const director = await this.directorRepository.findOne({
        where: { id: updatePeliculaDto.directorId },
      });

      if (!director) {
        throw new NotFoundException('El director no existe');
      }

      pelicula.director = director;
    }

    if (updatePeliculaDto.titulo !== undefined) {
      pelicula.titulo = updatePeliculaDto.titulo;
    }

    if (updatePeliculaDto.anioEstreno !== undefined) {
      pelicula.anioEstreno = updatePeliculaDto.anioEstreno;
    }

    if (updatePeliculaDto.duracion !== undefined) {
      pelicula.duracion = updatePeliculaDto.duracion;
    }

    return await this.peliculaRepository.save(pelicula);
  }

  async remove(id: number) {
    const pelicula = await this.findOne(id);

    await this.peliculaRepository.remove(pelicula);

    return {
      message: 'Película eliminada correctamente',
    };
  }
}