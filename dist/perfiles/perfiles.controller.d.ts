import { PerfilesService } from './perfiles.service';
import { CreatePerfilDto } from './dto/create-perfil.dto/create-perfil.dto';
import { UpdatePerfilDto } from './dto/update-perfil.dto/update-perfil.dto';
export declare class PerfilesController {
    private readonly perfilesService;
    constructor(perfilesService: PerfilesService);
    create(createPerfilDto: CreatePerfilDto): Promise<import("./entities/perfiles.entity").Perfil>;
    findAll(): Promise<import("./entities/perfiles.entity").Perfil[]>;
    findOne(id: number): Promise<import("./entities/perfiles.entity").Perfil>;
    update(id: number, updatePerfilDto: UpdatePerfilDto): Promise<import("./entities/perfiles.entity").Perfil>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
