import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateSuscripcionDto } from './dto/create-suscripcion.dto';
import { UpdateSuscripcionDto } from './dto/update-suscripcion.dto';
import { Suscripcion } from './entities/suscripcion.entity';

@Injectable()
export class SuscripcionesService {
  constructor(
    @InjectRepository(Suscripcion)
    private readonly suscripcionRepository: Repository<Suscripcion>,
  ) {}

  private validatePlan(nombre: string, maxPerfiles: number) {
    const reglas = {
      Basic: 2,
      Premium: 5,
      Gold: 5,
    } as const;

    const nombreNormalizado = nombre.trim();
    const maximoEsperado = reglas[nombreNormalizado as keyof typeof reglas];

    if (maximoEsperado === undefined) {
      throw new BadRequestException('El nombre de la suscripción no es válido');
    }

    if (maxPerfiles !== maximoEsperado) {
      throw new BadRequestException(
        `La suscripción ${nombreNormalizado} debe tener exactamente ${maximoEsperado} perfiles.`,
      );
    }
  }

  private async ensureNombreUnico(nombre: string, excludeId?: number) {
    const suscripciones = await this.suscripcionRepository.find();
    const duplicado = suscripciones.some(
      (suscripcion) =>
        suscripcion.id !== excludeId &&
        suscripcion.nombre.trim().toLowerCase() === nombre.trim().toLowerCase(),
    );

    if (duplicado) {
      throw new ConflictException('Ya existe una suscripción con ese nombre');
    }
  }

  async create(createSuscripcionDto: CreateSuscripcionDto) {
    const nombre = createSuscripcionDto.nombre.trim();
    const maxPerfiles = createSuscripcionDto.maxPerfiles;

    this.validatePlan(nombre, maxPerfiles);
    await this.ensureNombreUnico(nombre);

    const suscripcion = this.suscripcionRepository.create({
      nombre,
      maxPerfiles,
    });

    return this.suscripcionRepository.save(suscripcion);
  }

  async findAll() {
    return this.suscripcionRepository.find({
      relations: {
        usuarios: true,
      },
    });
  }

  async findOne(id: number) {
    const suscripcion = await this.suscripcionRepository.findOne({
      where: { id },
      relations: {
        usuarios: true,
      },
    });

    if (!suscripcion) {
      throw new NotFoundException('La suscripción no existe');
    }

    return suscripcion;
  }

  async update(id: number, updateSuscripcionDto: UpdateSuscripcionDto) {
    const suscripcion = await this.findOne(id);

    const nombreFinal = updateSuscripcionDto.nombre
      ? updateSuscripcionDto.nombre.trim()
      : suscripcion.nombre;
    const maxPerfilesFinal =
      updateSuscripcionDto.maxPerfiles ?? suscripcion.maxPerfiles;

    this.validatePlan(nombreFinal, maxPerfilesFinal);

    if (
      updateSuscripcionDto.nombre &&
      updateSuscripcionDto.nombre.trim().toLowerCase() !==
        suscripcion.nombre.trim().toLowerCase()
    ) {
      await this.ensureNombreUnico(nombreFinal, id);
    }

    Object.assign(suscripcion, {
      ...updateSuscripcionDto,
      nombre: nombreFinal,
      maxPerfiles: maxPerfilesFinal,
    });

    return this.suscripcionRepository.save(suscripcion);
  }

  async remove(id: number) {
    const suscripcion = await this.findOne(id);

    if (suscripcion.usuarios && suscripcion.usuarios.length > 0) {
      throw new BadRequestException(
        'No se puede eliminar una suscripción con usuarios asociados',
      );
    }

    await this.suscripcionRepository.remove(suscripcion);

    return {
      message: 'Suscripción eliminada correctamente',
    };
  }
}
