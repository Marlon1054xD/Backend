import { PeliculasService } from './peliculas.service';
import { CreatePeliculaDto } from './dto/create-pelicula.dto';
import { UpdatePeliculaDto } from './dto/update-pelicula.dto';
export declare class PeliculasController {
    private readonly peliculasService;
    constructor(peliculasService: PeliculasService);
    create(createPeliculaDto: CreatePeliculaDto): Promise<import("./entities/pelicula.entity").Pelicula>;
    findAll(): Promise<import("./entities/pelicula.entity").Pelicula[]>;
    findOne(id: number): Promise<import("./entities/pelicula.entity").Pelicula>;
    update(id: number, updatePeliculaDto: UpdatePeliculaDto): Promise<import("./entities/pelicula.entity").Pelicula>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
