import { Repository } from 'typeorm';
import { Favorito } from './entities/favorito.entity';
import { Usuario } from '../usuarios/entities/usuarios.entity';
import { Pelicula } from '../peliculas/entities/pelicula.entity';
import { CreateFavoritoDto } from './dto/create-favorito.dto';
import { UpdateFavoritoDto } from './dto/update-favorito.dto';
export declare class FavoritosService {
    private readonly favoritoRepository;
    private readonly usuarioRepository;
    private readonly peliculaRepository;
    constructor(favoritoRepository: Repository<Favorito>, usuarioRepository: Repository<Usuario>, peliculaRepository: Repository<Pelicula>);
    create(createFavoritoDto: CreateFavoritoDto): Promise<Favorito>;
    findAll(): Promise<Favorito[]>;
    findOne(id: number): Promise<Favorito>;
    update(id: number, updateFavoritoDto: UpdateFavoritoDto): Promise<Favorito>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
