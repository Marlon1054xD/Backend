import { Repository } from 'typeorm';
import { Usuario } from './entities/usuarios.entity';
import { Suscripcion } from '../suscripciones/entities/suscripcion.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto/update-usuario.dto';
export declare class UsuariosService {
    private readonly usuarioRepository;
    private readonly suscripcionRepository;
    constructor(usuarioRepository: Repository<Usuario>, suscripcionRepository: Repository<Suscripcion>);
    create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario>;
    findAll(): Promise<Usuario[]>;
    findOne(id: number): Promise<Usuario>;
    update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
