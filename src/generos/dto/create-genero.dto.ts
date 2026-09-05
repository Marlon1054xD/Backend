import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateGeneroDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nombre!: string;
}