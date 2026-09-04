import { Repository } from 'typeorm';
import { Perfil } from './entities/perfiles.entity';
import { Usuario } from '../usuarios/entities/usuarios.entity';
import { CreatePerfilDto } from './dto/create-perfil.dto/create-perfil.dto';
import { UpdatePerfilDto } from './dto/update-perfil.dto/update-perfil.dto';
export declare class PerfilesService {
    private readonly perfilRepository;
    private readonly usuarioRepository;
    constructor(perfilRepository: Repository<Perfil>, usuarioRepository: Repository<Usuario>);
    create(createPerfilDto: CreatePerfilDto): Promise<Perfil>;
    findAll(): Promise<Perfil[]>;
    findOne(id: number): Promise<Perfil>;
    update(id: number, updatePerfilDto: UpdatePerfilDto): Promise<Perfil>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
