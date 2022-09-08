import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ example: 'aboba@mail.ru', description: 'The email of user' })
  email: string;
  @ApiProperty({ example: '1', description: 'The tokensID of user' })
  supertokensID: string;
}
