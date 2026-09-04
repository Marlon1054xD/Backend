import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Director } from './entities/director.entity';
import { DirectoresController } from './directores.controller';
import { DirectoresService } from './directores.service';

@Module({
  imports: [TypeOrmModule.forFeature([Director])],
  controllers: [DirectoresController],
  providers: [DirectoresService],
})
export class DirectoresModule {}