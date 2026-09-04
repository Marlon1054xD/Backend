import { FavoritosService } from './favoritos.service';
import { CreateFavoritoDto } from './dto/create-favorito.dto';
import { UpdateFavoritoDto } from './dto/update-favorito.dto';
export declare class FavoritosController {
    private readonly favoritosService;
    constructor(favoritosService: FavoritosService);
    create(createFavoritoDto: CreateFavoritoDto): Promise<import("./entities/favorito.entity").Favorito>;
    findAll(): Promise<import("./entities/favorito.entity").Favorito[]>;
    findOne(id: number): Promise<import("./entities/favorito.entity").Favorito>;
    update(id: number, updateFavoritoDto: UpdateFavoritoDto): Promise<import("./entities/favorito.entity").Favorito>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
