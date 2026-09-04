import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateFavoritoDto {
  @IsNotEmpty()
  @IsInt()
  usuarioId!: number;

  @IsNotEmpty()
  @IsInt()
  peliculaId!: number;
}