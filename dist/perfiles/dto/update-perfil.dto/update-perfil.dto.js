"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePerfilDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_perfil_dto_1 = require("../create-perfil.dto/create-perfil.dto");
class UpdatePerfilDto extends (0, mapped_types_1.PartialType)(create_perfil_dto_1.CreatePerfilDto) {
}
exports.UpdatePerfilDto = UpdatePerfilDto;
//# sourceMappingURL=update-perfil.dto.js.map