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
exports.Usuario = void 0;
const typeorm_1 = require("typeorm");
const suscripcion_entity_1 = require("../../suscripciones/entities/suscripcion.entity");
const perfiles_entity_1 = require("../../perfiles/entities/perfiles.entity");
const favorito_entity_1 = require("../../favoritos/entities/favorito.entity");
let Usuario = class Usuario {
    id;
    nombre;
    email;
    password;
    suscripcion;
    perfiles;
    favoritos;
};
exports.Usuario = Usuario;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Usuario.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Usuario.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 150, unique: true }),
    __metadata("design:type", String)
], Usuario.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], Usuario.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => suscripcion_entity_1.Suscripcion, {
        nullable: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'suscripcion_id' }),
    __metadata("design:type", suscripcion_entity_1.Suscripcion)
], Usuario.prototype, "suscripcion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => perfiles_entity_1.Perfil, (perfil) => perfil.usuario),
    __metadata("design:type", Array)
], Usuario.prototype, "perfiles", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => favorito_entity_1.Favorito, (favorito) => favorito.usuario),
    __metadata("design:type", Array)
], Usuario.prototype, "favoritos", void 0);
exports.Usuario = Usuario = __decorate([
    (0, typeorm_1.Entity)('usuarios')
], Usuario);
//# sourceMappingURL=usuarios.entity.js.map