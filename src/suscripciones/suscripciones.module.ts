import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuscripcionesController } from './suscripciones.controller';
import { SuscripcionesService } from './suscripciones.service';
import { Suscripcion } from './entities/suscripcion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Suscripcion])],
  controllers: [SuscripcionesController],
  providers: [SuscripcionesService],
  exports: [TypeOrmModule],
})
export class SuscripcionesModule {}