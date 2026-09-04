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
exports.Director = void 0;
const typeorm_1 = require("typeorm");
const pelicula_entity_1 = require("../../peliculas/entities/pelicula.entity");
let Director = class Director {
    id;
    nombre;
    apellido;
    peliculas;
};
exports.Director = Director;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Director.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Director.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Director.prototype, "apellido", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => pelicula_entity_1.Pelicula, (pelicula) => pelicula.director),
    __metadata("design:type", Array)
], Director.prototype, "peliculas", void 0);
exports.Director = Director = __decorate([
    (0, typeorm_1.Entity)('directores')
], Director);
//# sourceMappingURL=director.entity.js.map