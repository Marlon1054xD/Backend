import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Usuario } from './entities/usuarios.entity';
import { Suscripcion } from '../suscripciones/entities/suscripcion.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto/update-usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,

    @InjectRepository(Suscripcion)
    private readonly suscripcionRepository: Repository<Suscripcion>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    const suscripcion = await this.suscripcionRepository.findOne({
      where: { id: createUsuarioDto.suscripcionId },
    });

    if (!suscripcion) {
      throw new NotFoundException('La suscripción no existe');
    }

    const usuario = this.usuarioRepository.create({
      nombre: createUsuarioDto.nombre,
      email: createUsuarioDto.email,
      password: createUsuarioDto.password,
      suscripcion,
    });

    return this.usuarioRepository.save(usuario);
  }

  async findAll() {
    return this.usuarioRepository.find({
      relations: {
        suscripcion: true,
        perfiles: true,
      },
    });
  }

  async findOne(id: number) {
    const usuario = await this.usuarioRepository.findOne({
      where: { id },
      relations: {
        suscripcion: true,
        perfiles: true,
      },
    });

    if (!usuario) {
      throw new NotFoundException('El usuario no existe');
    }

    return usuario;
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const usuario = await this.findOne(id);

    if (updateUsuarioDto.suscripcionId !== undefined) {
      const suscripcion = await this.suscripcionRepository.findOne({
        where: { id: updateUsuarioDto.suscripcionId },
      });

      if (!suscripcion) {
        throw new NotFoundException('La suscripción no existe');
      }

      usuario.suscripcion = suscripcion;
    }

    if (updateUsuarioDto.nombre !== undefined) {
      usuario.nombre = updateUsuarioDto.nombre;
    }

    if (updateUsuarioDto.email !== undefined) {
      usuario.email = updateUsuarioDto.email;
    }

    if (updateUsuarioDto.password !== undefined) {
      usuario.password = updateUsuarioDto.password;
    }

    return this.usuarioRepository.save(usuario);
  }

  async remove(id: number) {
    const usuario = await this.findOne(id);

    await this.usuarioRepository.remove(usuario);

    return {
      message: 'Usuario eliminado correctamente',
    };
  }
}