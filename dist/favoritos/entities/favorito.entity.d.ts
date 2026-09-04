import { Usuario } from '../../usuarios/entities/usuarios.entity';
import { Pelicula } from '../../peliculas/entities/pelicula.entity';
export declare class Favorito {
    id: number;
    usuario: Usuario;
    pelicula: Pelicula;
}
