import { Body, Controller, Delete, Get, Param, Patch, Post, UseFilters } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import { ProductonorderService } from './productonorder.service';
import { UpdateProductonorderDto } from './dto/update-productonorder.dto';
import { CreateProductonorderDto } from './dto/create-productonorder.dto';
import { Productonorder } from './entities/productonorder.entity';
import { HttpExceptionFilter } from '../http-exception.filter';

@ApiResponse({
  status: 501,
  description: 'The method is not yet implemented!',
})
@ApiBearerAuth()
@ApiTags('productonorder')
@Controller('productonorder')
@UseFilters(new HttpExceptionFilter())
export class ProductonorderController {
  constructor(private readonly productonorderService: ProductonorderService) {}

  @ApiOperation({
    summary: 'Find a productonorder by ID',
  })
  @Post('create')
  @ApiCreatedResponse({ type: Productonorder })
  @ApiOperation({ summary: 'Create productonorder' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 405, description: 'Invalid input' })
  async create(@Body() createProductonorderDto: CreateProductonorderDto): Promise<Productonorder> {
    return await this.productonorderService.create(createProductonorderDto);
  }

  @ApiOperation({ summary: 'Delete productonorder by ID ' })
  @ApiResponse({
    status: 400,
    description: 'Invalid ID supplied',
  })
  @ApiResponse({
    status: 404,
    description: 'productonorder not found',
  })
  @Delete(':id')
  @ApiOkResponse({ type: Productonorder })
  async remove(@Param('id') id: string): Promise<Productonorder> {
    return await this.productonorderService.remove(+id);
  }

  @ApiOperation({ summary: 'Update productonorder' })
  @Patch(':id')
  @ApiCreatedResponse({ type: Productonorder })
  async update(
    @Param('id') id: string,
    @Body() updateProductonorderDto: UpdateProductonorderDto
  ): Promise<Productonorder> {
    return await this.productonorderService.update(+id, updateProductonorderDto);
  }

  @ApiOperation({ summary: 'Find all productonorder' })
  @Get()
  @ApiOkResponse({ type: [Productonorder] })
  async findAll() {
    return await this.productonorderService.findAll();
  }
}
