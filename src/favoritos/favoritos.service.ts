import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Favorito } from './entities/favorito.entity';
import { Usuario } from '../usuarios/entities/usuarios.entity';
import { Pelicula } from '../peliculas/entities/pelicula.entity';

import { CreateFavoritoDto } from './dto/create-favorito.dto';
import { UpdateFavoritoDto } from './dto/update-favorito.dto';

@Injectable()
export class FavoritosService {
  constructor(
    @InjectRepository(Favorito)
    private readonly favoritoRepository: Repository<Favorito>,

    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,

    @InjectRepository(Pelicula)
    private readonly peliculaRepository: Repository<Pelicula>,
  ) {}

  async create(createFavoritoDto: CreateFavoritoDto) {
    const usuario = await this.usuarioRepository.findOne({
      where: { id: createFavoritoDto.usuarioId },
    });

    if (!usuario) {
      throw new NotFoundException('El usuario no existe');
    }

    const pelicula = await this.peliculaRepository.findOne({
      where: { id: createFavoritoDto.peliculaId },
    });

    if (!pelicula) {
      throw new NotFoundException('La película no existe');
    }

    const existe = await this.favoritoRepository.findOne({
      where: {
        usuario: { id: createFavoritoDto.usuarioId },
        pelicula: { id: createFavoritoDto.peliculaId },
      },
    });

    if (existe) {
      throw new BadRequestException(
        'La película ya está en favoritos',
      );
    }

    const favorito = this.favoritoRepository.create({
      usuario,
      pelicula,
    });

    return this.favoritoRepository.save(favorito);
  }

  async findAll() {
    return this.favoritoRepository.find({
      relations: {
        usuario: true,
        pelicula: true,
      },
    });
  }

  async findOne(id: number) {
    const favorito = await this.favoritoRepository.findOne({
      where: { id },
      relations: {
        usuario: true,
        pelicula: true,
      },
    });

    if (!favorito) {
      throw new NotFoundException(
        'El favorito no existe',
      );
    }

    return favorito;
  }

  async update(
    id: number,
    updateFavoritoDto: UpdateFavoritoDto,
  ) {
    const favorito = await this.findOne(id);

    if (updateFavoritoDto.usuarioId !== undefined) {
      const usuario = await this.usuarioRepository.findOne({
        where: { id: updateFavoritoDto.usuarioId },
      });

      if (!usuario) {
        throw new NotFoundException(
          'El usuario no existe',
        );
      }

      favorito.usuario = usuario;
    }

    if (updateFavoritoDto.peliculaId !== undefined) {
      const pelicula = await this.peliculaRepository.findOne({
        where: { id: updateFavoritoDto.peliculaId },
      });

      if (!pelicula) {
        throw new NotFoundException(
          'La película no existe',
        );
      }

      favorito.pelicula = pelicula;
    }

    return this.favoritoRepository.save(favorito);
  }

  async remove(id: number) {
    const favorito = await this.findOne(id);

    await this.favoritoRepository.remove(favorito);

    return {
      message: 'Favorito eliminado correctamente',
    };
  }
}