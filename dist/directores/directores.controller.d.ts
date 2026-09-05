import { DirectoresService } from './directores.service';
import { CreateDirectorDto } from './dto/create-director.dto';
import { UpdateDirectorDto } from './dto/update-director.dto';
export declare class DirectoresController {
    private readonly directoresService;
    constructor(directoresService: DirectoresService);
    create(createDirectorDto: CreateDirectorDto): Promise<import("./entities/director.entity").Director>;
    findAll(): Promise<import("./entities/director.entity").Director[]>;
    findOne(id: number): Promise<import("./entities/director.entity").Director>;
    update(id: number, updateDirectorDto: UpdateDirectorDto): Promise<import("./entities/director.entity").Director>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
