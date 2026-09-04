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
exports.Favorito = void 0;
const typeorm_1 = require("typeorm");
const usuarios_entity_1 = require("../../usuarios/entities/usuarios.entity");
const pelicula_entity_1 = require("../../peliculas/entities/pelicula.entity");
let Favorito = class Favorito {
    id;
    usuario;
    pelicula;
};
exports.Favorito = Favorito;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Favorito.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuarios_entity_1.Usuario, (usuario) => usuario.favoritos, {
        nullable: false,
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'usuario_id' }),
    __metadata("design:type", usuarios_entity_1.Usuario)
], Favorito.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => pelicula_entity_1.Pelicula, (pelicula) => pelicula.favoritos, {
        nullable: false,
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'pelicula_id' }),
    __metadata("design:type", pelicula_entity_1.Pelicula)
], Favorito.prototype, "pelicula", void 0);
exports.Favorito = Favorito = __decorate([
    (0, typeorm_1.Entity)('favoritos')
], Favorito);
//# sourceMappingURL=favorito.entity.js.map