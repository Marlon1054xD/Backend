import { IsInt, IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class CreatePeliculaDto {
  @IsString()
  @IsNotEmpty()
  titulo!: string;

  @IsInt()
  @Min(1900)
  @Max(2100)
  anioEstreno!: number;

  @IsInt()
  @Min(1)
  duracion!: number;

  @IsInt()
  generoId!: number;

  @IsInt()
  directorId!: number;
}