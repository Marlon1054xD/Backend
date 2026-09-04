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
exports.FavoritosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const favorito_entity_1 = require("./entities/favorito.entity");
const usuarios_entity_1 = require("../usuarios/entities/usuarios.entity");
const pelicula_entity_1 = require("../peliculas/entities/pelicula.entity");
let FavoritosService = class FavoritosService {
    favoritoRepository;
    usuarioRepository;
    peliculaRepository;
    constructor(favoritoRepository, usuarioRepository, peliculaRepository) {
        this.favoritoRepository = favoritoRepository;
        this.usuarioRepository = usuarioRepository;
        this.peliculaRepository = peliculaRepository;
    }
    async create(createFavoritoDto) {
        const usuario = await this.usuarioRepository.findOne({
            where: { id: createFavoritoDto.usuarioId },
        });
        if (!usuario) {
            throw new common_1.NotFoundException('El usuario no existe');
        }
        const pelicula = await this.peliculaRepository.findOne({
            where: { id: createFavoritoDto.peliculaId },
        });
        if (!pelicula) {
            throw new common_1.NotFoundException('La película no existe');
        }
        const existe = await this.favoritoRepository.findOne({
            where: {
                usuario: { id: createFavoritoDto.usuarioId },
                pelicula: { id: createFavoritoDto.peliculaId },
            },
        });
        if (existe) {
            throw new common_1.BadRequestException('La película ya está en favoritos');
        }
        const favorito = this.favoritoRepository.create({
            usuario,
            pelicula,
        });
        return this.favoritoRepository.save(favorito);
    }
    async findAll() {
        return this.favoritoRepository.find({
            relations: {
                usuario: true,
                pelicula: true,
            },
        });
    }
    async findOne(id) {
        const favorito = await this.favoritoRepository.findOne({
            where: { id },
            relations: {
                usuario: true,
                pelicula: true,
            },
        });
        if (!favorito) {
            throw new common_1.NotFoundException('El favorito no existe');
        }
        return favorito;
    }
    async update(id, updateFavoritoDto) {
        const favorito = await this.findOne(id);
        if (updateFavoritoDto.usuarioId !== undefined) {
            const usuario = await this.usuarioRepository.findOne({
                where: { id: updateFavoritoDto.usuarioId },
            });
            if (!usuario) {
                throw new common_1.NotFoundException('El usuario no existe');
            }
            favorito.usuario = usuario;
        }
        if (updateFavoritoDto.peliculaId !== undefined) {
            const pelicula = await this.peliculaRepository.findOne({
                where: { id: updateFavoritoDto.peliculaId },
            });
            if (!pelicula) {
                throw new common_1.NotFoundException('La película no existe');
            }
            favorito.pelicula = pelicula;
        }
        return this.favoritoRepository.save(favorito);
    }
    async remove(id) {
        const favorito = await this.findOne(id);
        await this.favoritoRepository.remove(favorito);
        return {
            message: 'Favorito eliminado correctamente',
        };
    }
};
exports.FavoritosService = FavoritosService;
exports.FavoritosService = FavoritosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(favorito_entity_1.Favorito)),
    __param(1, (0, typeorm_1.InjectRepository)(usuarios_entity_1.Usuario)),
    __param(2, (0, typeorm_1.InjectRepository)(pelicula_entity_1.Pelicula)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], FavoritosService);
//# sourceMappingURL=favoritos.service.js.map