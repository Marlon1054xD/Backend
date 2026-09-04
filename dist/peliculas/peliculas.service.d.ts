import { Repository } from 'typeorm';
import { Pelicula } from './entities/pelicula.entity';
import { CreatePeliculaDto } from './dto/create-pelicula.dto';
import { UpdatePeliculaDto } from './dto/update-pelicula.dto';
import { Genero } from '../generos/entities/genero.entity';
import { Director } from '../directores/entities/director.entity';
export declare class PeliculasService {
    private readonly peliculaRepository;
    private readonly generoRepository;
    private readonly directorRepository;
    constructor(peliculaRepository: Repository<Pelicula>, generoRepository: Repository<Genero>, directorRepository: Repository<Director>);
    create(createPeliculaDto: CreatePeliculaDto): Promise<Pelicula>;
    findAll(): Promise<Pelicula[]>;
    findOne(id: number): Promise<Pelicula>;
    update(id: number, updatePeliculaDto: UpdatePeliculaDto): Promise<Pelicula>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
