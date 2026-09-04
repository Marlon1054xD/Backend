import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Perfil } from './entities/perfiles.entity';
import { Usuario } from '../usuarios/entities/usuarios.entity';
import { CreatePerfilDto } from './dto/create-perfil.dto/create-perfil.dto';
import { UpdatePerfilDto } from './dto/update-perfil.dto/update-perfil.dto';

@Injectable()
export class PerfilesService {
  constructor(
    @InjectRepository(Perfil)
    private readonly perfilRepository: Repository<Perfil>,

    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async create(createPerfilDto: CreatePerfilDto) {
    const usuario = await this.usuarioRepository.findOne({
      where: { id: createPerfilDto.usuarioId },
      relations: {
        suscripcion: true,
        perfiles: true,
      },
    });

    if (!usuario) {
      throw new NotFoundException('El usuario no existe');
    }

    const cantidadPerfiles = usuario.perfiles.length;
    const limite = usuario.suscripcion.maxPerfiles;

    if (cantidadPerfiles >= limite) {
      throw new BadRequestException(
        `El usuario ya alcanzó el límite de ${limite} perfiles de su suscripción`,
      );
    }

    const perfil = this.perfilRepository.create({
      nombre: createPerfilDto.nombre,
      infantil: createPerfilDto.infantil ?? false,
      usuario,
    });

    return this.perfilRepository.save(perfil);
  }

  async findAll() {
    return this.perfilRepository.find({
      relations: {
        usuario: {
          suscripcion: true,
        },
      },
    });
  }

  async findOne(id: number) {
    const perfil = await this.perfilRepository.findOne({
      where: { id },
      relations: {
        usuario: {
          suscripcion: true,
        },
      },
    });

    if (!perfil) {
      throw new NotFoundException('El perfil no existe');
    }

    return perfil;
  }

  async update(id: number, updatePerfilDto: UpdatePerfilDto) {
    const perfil = await this.findOne(id);

    if (updatePerfilDto.nombre !== undefined) {
      perfil.nombre = updatePerfilDto.nombre;
    }

    if (updatePerfilDto.infantil !== undefined) {
      perfil.infantil = updatePerfilDto.infantil;
    }

    return this.perfilRepository.save(perfil);
  }

  async remove(id: number) {
    const perfil = await this.findOne(id);

    await this.perfilRepository.remove(perfil);

    return {
      message: 'Perfil eliminado correctamente',
    };
  }
}