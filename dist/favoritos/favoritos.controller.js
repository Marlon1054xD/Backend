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
exports.FavoritosController = void 0;
const common_1 = require("@nestjs/common");
const favoritos_service_1 = require("./favoritos.service");
const create_favorito_dto_1 = require("./dto/create-favorito.dto");
const update_favorito_dto_1 = require("./dto/update-favorito.dto");
let FavoritosController = class FavoritosController {
    favoritosService;
    constructor(favoritosService) {
        this.favoritosService = favoritosService;
    }
    create(createFavoritoDto) {
        return this.favoritosService.create(createFavoritoDto);
    }
    findAll() {
        return this.favoritosService.findAll();
    }
    findOne(id) {
        return this.favoritosService.findOne(id);
    }
    update(id, updateFavoritoDto) {
        return this.favoritosService.update(id, updateFavoritoDto);
    }
    remove(id) {
        return this.favoritosService.remove(id);
    }
};
exports.FavoritosController = FavoritosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_favorito_dto_1.CreateFavoritoDto]),
    __metadata("design:returntype", void 0)
], FavoritosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FavoritosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FavoritosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_favorito_dto_1.UpdateFavoritoDto]),
    __metadata("design:returntype", void 0)
], FavoritosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FavoritosController.prototype, "remove", null);
exports.FavoritosController = FavoritosController = __decorate([
    (0, common_1.Controller)('favoritos'),
    __metadata("design:paramtypes", [favoritos_service_1.FavoritosService])
], FavoritosController);
//# sourceMappingURL=favoritos.controller.js.map