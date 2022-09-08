import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  @ApiProperty({ example: 15625, description: 'The price of order' })
  price: number;
  @IsNotEmpty()
  @ApiProperty({ example: 10, description: 'The count product in order' })
  count: number;
  @IsNotEmpty()
  @ApiProperty({ example: 1, description: 'The user id make an order' })
  userId: number | null;
}
