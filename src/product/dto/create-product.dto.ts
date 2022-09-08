import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @ApiProperty({ example: 'Smartphone', description: 'The title of product' })
  title: string;
  @IsNotEmpty()
  @ApiProperty({ example: 30000, description: 'The price of product' })
  price: string;
  @IsNotEmpty()
  @ApiProperty({ example: 15, description: 'The count of product' })
  count: string;
}
