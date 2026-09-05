import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateDirectorDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nombre!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  apellido!: string;
}