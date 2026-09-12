import { IsIn, IsInt, IsNotEmpty, IsString, MaxLength, Min } from 'class-validator';

export class CreateSuscripcionDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @IsIn(['Basic', 'Premium', 'Gold'])
  nombre!: string;

  @IsInt()
  @Min(1)
  maxPerfiles!: number;
}
