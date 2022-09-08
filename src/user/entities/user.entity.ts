import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty({ example: 123, description: 'ID of user' })
  id: number;
  @ApiProperty({ example: 'aboba@mail.ru', description: 'The email of user' })
  email: string;
  @ApiProperty({ example: '1', description: 'The tokensID of user' })
  supertokensID: string;
}
