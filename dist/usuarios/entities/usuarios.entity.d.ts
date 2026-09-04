import { Suscripcion } from '../../suscripciones/entities/suscripcion.entity';
import { Perfil } from '../../perfiles/entities/perfiles.entity';
import { Favorito } from '../../favoritos/entities/favorito.entity';
export declare class Usuario {
    id: number;
    nombre: string;
    email: string;
    password: string;
    suscripcion: Suscripcion;
    perfiles: Perfil[];
    favoritos: Favorito[];
}
