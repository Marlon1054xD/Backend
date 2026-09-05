import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Genero } from './entities/genero.entity';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';

@Injectable()
export class GenerosService {
  constructor(
    @InjectRepository(Genero)
    private readonly generoRepository: Repository<Genero>,
  ) {}

  async create(createGeneroDto: CreateGeneroDto) {
    const genero = this.generoRepository.create(createGeneroDto);

    return await this.generoRepository.save(genero);
  }

  async findAll() {
    return await this.generoRepository.find();
  }

  async findOne(id: number) {
    const genero = await this.generoRepository.findOne({
      where: { id },
    });

    if (!genero) {
      throw new NotFoundException(`El género con ID ${id} no existe`);
    }

    return genero;
  }

  async update(id: number, updateGeneroDto: UpdateGeneroDto) {
    const genero = await this.findOne(id);

    Object.assign(genero, updateGeneroDto);

    return await this.generoRepository.save(genero);
  }

  async remove(id: number) {
    const genero = await this.findOne(id);

    await this.generoRepository.remove(genero);

    return {
      message: 'Género eliminado correctamente',
    };
  }
}