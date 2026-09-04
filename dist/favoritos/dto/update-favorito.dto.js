"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFavoritoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_favorito_dto_1 = require("./create-favorito.dto");
class UpdateFavoritoDto extends (0, mapped_types_1.PartialType)(create_favorito_dto_1.CreateFavoritoDto) {
}
exports.UpdateFavoritoDto = UpdateFavoritoDto;
//# sourceMappingURL=update-favorito.dto.js.map