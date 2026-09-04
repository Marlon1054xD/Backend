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
exports.Suscripcion = void 0;
const typeorm_1 = require("typeorm");
const usuarios_entity_1 = require("../../usuarios/entities/usuarios.entity");
let Suscripcion = class Suscripcion {
    id;
    nombre;
    maxPerfiles;
    usuarios;
};
exports.Suscripcion = Suscripcion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Suscripcion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, unique: true }),
    __metadata("design:type", String)
], Suscripcion.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Suscripcion.prototype, "maxPerfiles", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => usuarios_entity_1.Usuario, (usuario) => usuario.suscripcion),
    __metadata("design:type", Array)
], Suscripcion.prototype, "usuarios", void 0);
exports.Suscripcion = Suscripcion = __decorate([
    (0, typeorm_1.Entity)('suscripciones')
], Suscripcion);
//# sourceMappingURL=suscripcion.entity.js.map