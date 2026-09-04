import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto/update-usuario.dto';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    create(createUsuarioDto: CreateUsuarioDto): Promise<import("./entities/usuarios.entity").Usuario>;
    findAll(): Promise<import("./entities/usuarios.entity").Usuario[]>;
    findOne(id: number): Promise<import("./entities/usuarios.entity").Usuario>;
    update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<import("./entities/usuarios.entity").Usuario>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
