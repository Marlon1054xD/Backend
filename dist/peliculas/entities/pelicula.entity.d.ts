import { Genero } from '../../generos/entities/genero.entity';
import { Director } from '../../directores/entities/director.entity';
export declare class Pelicula {
    id: number;
    titulo: string;
    anioEstreno: number;
    duracion: number;
    genero: Genero;
    director: Director;
}
