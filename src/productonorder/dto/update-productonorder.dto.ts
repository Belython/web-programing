import { PartialType } from '@nestjs/swagger';
import { CreateProductonorderDto } from './create-productonorder.dto';

export class UpdateProductonorderDto extends PartialType(CreateProductonorderDto) {}
