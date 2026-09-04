import { Usuario } from '../../usuarios/entities/usuarios.entity';
export declare class Suscripcion {
    id: number;
    nombre: string;
    maxPerfiles: number;
    usuarios: Usuario[];
}
