import { ApiProperty } from '@nestjs/swagger';

export class Productonorder {
  @ApiProperty({ example: 1, description: 'The product id in order' })
  productId: number;
  @ApiProperty({ example: 1, description: 'The order id' })
  orderId: number;
}
