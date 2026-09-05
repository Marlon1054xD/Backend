import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Director } from './entities/director.entity';
import { CreateDirectorDto } from './dto/create-director.dto';
import { UpdateDirectorDto } from './dto/update-director.dto';

@Injectable()
export class DirectoresService {
  constructor(
    @InjectRepository(Director)
    private readonly directorRepository: Repository<Director>,
  ) {}

  async create(createDirectorDto: CreateDirectorDto) {
    const director = this.directorRepository.create(createDirectorDto);

    return await this.directorRepository.save(director);
  }

  async findAll() {
    return await this.directorRepository.find();
  }

  async findOne(id: number) {
    const director = await this.directorRepository.findOne({
      where: { id },
    });

    if (!director) {
      throw new NotFoundException(
        `El director con ID ${id} no existe`,
      );
    }

    return director;
  }

  async update(
    id: number,
    updateDirectorDto: UpdateDirectorDto,
  ) {
    const director = await this.findOne(id);

    Object.assign(director, updateDirectorDto);

    return await this.directorRepository.save(director);
  }

  async remove(id: number) {
    const director = await this.findOne(id);

    await this.directorRepository.remove(director);

    return {
      message: 'Director eliminado correctamente',
    };
  }
}