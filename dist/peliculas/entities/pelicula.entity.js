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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pelicula = void 0;
const typeorm_1 = require("typeorm");
const genero_entity_1 = require("../../generos/entities/genero.entity");
const director_entity_1 = require("../../directores/entities/director.entity");
const favorito_entity_1 = require("../../favoritos/entities/favorito.entity");
let Pelicula = class Pelicula {
    id;
    titulo;
    anioEstreno;
    duracion;
    genero;
    director;
    favoritos;
};
exports.Pelicula = Pelicula;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Pelicula.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 200 }),
    __metadata("design:type", String)
], Pelicula.prototype, "titulo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Pelicula.prototype, "anioEstreno", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Pelicula.prototype, "duracion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => genero_entity_1.Genero, (genero) => genero.peliculas, {
        nullable: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'genero_id' }),
    __metadata("design:type", genero_entity_1.Genero)
], Pelicula.prototype, "genero", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => director_entity_1.Director, (director) => director.peliculas, {
        nullable: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'director_id' }),
    __metadata("design:type", director_entity_1.Director)
], Pelicula.prototype, "director", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => favorito_entity_1.Favorito, (favorito) => favorito.pelicula),
    __metadata("design:type", Array)
], Pelicula.prototype, "favoritos", void 0);
exports.Pelicula = Pelicula = __decorate([
    (0, typeorm_1.Entity)('peliculas')
], Pelicula);
//# sourceMappingURL=pelicula.entity.js.map