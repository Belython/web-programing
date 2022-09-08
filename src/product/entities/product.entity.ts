import { ApiProperty } from '@nestjs/swagger';

export class Product {
  id: number;
  @ApiProperty({ example: 'Smartphone', description: 'The title of product' })
  title: string;
  @ApiProperty({ example: 30000, description: 'The price of product' })
  price: string;
  @ApiProperty({ example: 15, description: 'The count of product' })
  count: string;
}
