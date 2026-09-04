import { Genero } from '../../generos/entities/genero.entity';
import { Director } from '../../directores/entities/director.entity';
import { Favorito } from '../../favoritos/entities/favorito.entity';
export declare class Pelicula {
    id: number;
    titulo: string;
    anioEstreno: number;
    duracion: number;
    genero: Genero;
    director: Director;
    favoritos: Favorito[];
}
