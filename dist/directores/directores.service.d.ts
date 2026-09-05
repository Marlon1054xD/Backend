import { Repository } from 'typeorm';
import { Director } from './entities/director.entity';
import { CreateDirectorDto } from './dto/create-director.dto';
import { UpdateDirectorDto } from './dto/update-director.dto';
export declare class DirectoresService {
    private readonly directorRepository;
    constructor(directorRepository: Repository<Director>);
    create(createDirectorDto: CreateDirectorDto): Promise<Director>;
    findAll(): Promise<Director[]>;
    findOne(id: number): Promise<Director>;
    update(id: number, updateDirectorDto: UpdateDirectorDto): Promise<Director>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
