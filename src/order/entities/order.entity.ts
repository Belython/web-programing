import { ApiProperty } from '@nestjs/swagger';

export class Order {
  id: number;
  @ApiProperty({ example: 15625, description: 'The price of order' })
  price: number;
  @ApiProperty({ example: 10, description: 'The count product in order' })
  count: number;
  @ApiProperty({ example: 1, description: 'The user id make an order' })
  userId: number | null;
}
