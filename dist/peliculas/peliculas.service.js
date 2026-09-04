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
exports.PeliculasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const pelicula_entity_1 = require("./entities/pelicula.entity");
const genero_entity_1 = require("../generos/entities/genero.entity");
const director_entity_1 = require("../directores/entities/director.entity");
let PeliculasService = class PeliculasService {
    peliculaRepository;
    generoRepository;
    directorRepository;
    constructor(peliculaRepository, generoRepository, directorRepository) {
        this.peliculaRepository = peliculaRepository;
        this.generoRepository = generoRepository;
        this.directorRepository = directorRepository;
    }
    async create(createPeliculaDto) {
        const genero = await this.generoRepository.findOne({
            where: { id: createPeliculaDto.generoId },
        });
        if (!genero) {
            throw new common_1.NotFoundException('El género no existe');
        }
        const director = await this.directorRepository.findOne({
            where: { id: createPeliculaDto.directorId },
        });
        if (!director) {
            throw new common_1.NotFoundException('El director no existe');
        }
        const pelicula = this.peliculaRepository.create({
            titulo: createPeliculaDto.titulo,
            anioEstreno: createPeliculaDto.anioEstreno,
            duracion: createPeliculaDto.duracion,
            genero,
            director,
        });
        return await this.peliculaRepository.save(pelicula);
    }
    async findAll() {
        return await this.peliculaRepository.find({
            relations: {
                genero: true,
                director: true,
            },
        });
    }
    async findOne(id) {
        const pelicula = await this.peliculaRepository.findOne({
            where: { id },
            relations: {
                genero: true,
                director: true,
            },
        });
        if (!pelicula) {
            throw new common_1.NotFoundException('La película no existe');
        }
        return pelicula;
    }
    async update(id, updatePeliculaDto) {
        const pelicula = await this.findOne(id);
        if (updatePeliculaDto.generoId) {
            const genero = await this.generoRepository.findOne({
                where: { id: updatePeliculaDto.generoId },
            });
            if (!genero) {
                throw new common_1.NotFoundException('El género no existe');
            }
            pelicula.genero = genero;
        }
        if (updatePeliculaDto.directorId) {
            const director = await this.directorRepository.findOne({
                where: { id: updatePeliculaDto.directorId },
            });
            if (!director) {
                throw new common_1.NotFoundException('El director no existe');
            }
            pelicula.director = director;
        }
        if (updatePeliculaDto.titulo !== undefined) {
            pelicula.titulo = updatePeliculaDto.titulo;
        }
        if (updatePeliculaDto.anioEstreno !== undefined) {
            pelicula.anioEstreno = updatePeliculaDto.anioEstreno;
        }
        if (updatePeliculaDto.duracion !== undefined) {
            pelicula.duracion = updatePeliculaDto.duracion;
        }
        return await this.peliculaRepository.save(pelicula);
    }
    async remove(id) {
        const pelicula = await this.findOne(id);
        await this.peliculaRepository.remove(pelicula);
        return {
            message: 'Película eliminada correctamente',
        };
    }
};
exports.PeliculasService = PeliculasService;
exports.PeliculasService = PeliculasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(pelicula_entity_1.Pelicula)),
    __param(1, (0, typeorm_1.InjectRepository)(genero_entity_1.Genero)),
    __param(2, (0, typeorm_1.InjectRepository)(director_entity_1.Director)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], PeliculasService);
//# sourceMappingURL=peliculas.service.js.map