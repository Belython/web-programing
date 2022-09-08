import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateProductonorderDto {
  @IsNotEmpty()
  @ApiProperty({ example: 1, description: 'The product id in order' })
  productId: number;
  @IsNotEmpty()
  @ApiProperty({ example: 1, description: 'The order id' })
  orderId: number;
}
