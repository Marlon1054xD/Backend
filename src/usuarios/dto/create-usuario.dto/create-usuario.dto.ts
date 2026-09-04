import { IsEmail, IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty()
  nombre!: string;

  @IsEmail()
  email!: string;

  @IsString()
  @IsNotEmpty()
  password!: string;

  @IsInt()
  @Min(1)
  suscripcionId!: number;
}