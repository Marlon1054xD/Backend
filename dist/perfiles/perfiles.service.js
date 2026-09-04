"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerfilesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const perfiles_entity_1 = require("./entities/perfiles.entity");
const usuarios_entity_1 = require("../usuarios/entities/usuarios.entity");
let PerfilesService = class PerfilesService {
    perfilRepository;
    usuarioRepository;
    constructor(perfilRepository, usuarioRepository) {
        this.perfilRepository = perfilRepository;
        this.usuarioRepository = usuarioRepository;
    }
    async create(createPerfilDto) {
        const usuario = await this.usuarioRepository.findOne({
            where: { id: createPerfilDto.usuarioId },
            relations: {
                suscripcion: true,
                perfiles: true,
            },
        });
        if (!usuario) {
            throw new common_1.NotFoundException('El usuario no existe');
        }
        const cantidadPerfiles = usuario.perfiles.length;
        const limite = usuario.suscripcion.maxPerfiles;
        if (cantidadPerfiles >= limite) {
            throw new common_1.BadRequestException(`El usuario ya alcanzó el límite de ${limite} perfiles de su suscripción`);
        }
        const perfil = this.perfilRepository.create({
            nombre: createPerfilDto.nombre,
            infantil: createPerfilDto.infantil ?? false,
            usuario,
        });
        return this.perfilRepository.save(perfil);
    }
    async findAll() {
        return this.perfilRepository.find({
            relations: {
                usuario: {
                    suscripcion: true,
                },
            },
        });
    }
    async findOne(id) {
        const perfil = await this.perfilRepository.findOne({
            where: { id },
            relations: {
                usuario: {
                    suscripcion: true,
                },
            },
        });
        if (!perfil) {
            throw new common_1.NotFoundException('El perfil no existe');
        }
        return perfil;
    }
    async update(id, updatePerfilDto) {
        const perfil = await this.findOne(id);
        if (updatePerfilDto.nombre !== undefined) {
            perfil.nombre = updatePerfilDto.nombre;
        }
        if (updatePerfilDto.infantil !== undefined) {
            perfil.infantil = updatePerfilDto.infantil;
        }
        return this.perfilRepository.save(perfil);
    }
    async remove(id) {
        const perfil = await this.findOne(id);
        await this.perfilRepository.remove(perfil);
        return {
            message: 'Perfil eliminado correctamente',
        };
    }
};
exports.PerfilesService = PerfilesService;
exports.PerfilesService = PerfilesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(perfiles_entity_1.Perfil)),
    __param(1, (0, typeorm_1.InjectRepository)(usuarios_entity_1.Usuario)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], PerfilesService);
//# sourceMappingURL=perfiles.service.js.map