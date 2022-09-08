import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiBasicAuth,
} from '@nestjs/swagger';
import { ProductService } from './product.service';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
import { HttpExceptionFilter } from '../http-exception.filter';
import { AuthGuard } from '../auth/auth.guard';

@ApiResponse({
  status: 501,
  description: 'The method is not yet implemented!',
})
@ApiBearerAuth()
@ApiTags('product')
@Controller('product')
@UseFilters(new HttpExceptionFilter())
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @ApiOperation({
    summary: 'Find a product by ID',
  })
  @Get(':id')
  @ApiOkResponse({ type: Product })
  @ApiResponse({
    status: 200,
    description: 'successful operation',
  })
  @ApiResponse({
    status: 404,
    description: 'Product not found',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid ID supplied',
  })
  @ApiBasicAuth()
  @UseGuards(AuthGuard)
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Product> {
    return await this.productService.findOne(id);
  }

  @Post('create')
  @ApiCreatedResponse({ type: Product })
  @ApiOperation({ summary: 'Create product' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 405, description: 'Invalid input' })
  @ApiBasicAuth()
  @UseGuards(AuthGuard)
  async create(
    @Param() createProduct: CreateProductDto,
    @Body() createProductDto: CreateProductDto
  ): Promise<Product> {
    return await this.productService.create(createProductDto);
  }

  @ApiOperation({ summary: 'Delete product by ID ' })
  @ApiResponse({
    status: 400,
    description: 'Invalid ID supplied',
  })
  @ApiResponse({
    status: 404,
    description: 'product not found',
  })
  @Delete(':id')
  @ApiOkResponse({ type: Product })
  @ApiBasicAuth()
  @UseGuards(AuthGuard)
  async remove(@Param('id', ParseIntPipe) id: number): Promise<Product> {
    return await this.productService.remove(id);
  }

  @ApiOperation({ summary: 'Update product' })
  @Patch(':id')
  @ApiCreatedResponse({ type: Product })
  @ApiBasicAuth()
  @UseGuards(AuthGuard)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto
  ): Promise<Product> {
    return await this.productService.update(id, updateProductDto);
  }

  @ApiOperation({ summary: 'Find all product' })
  @Get()
  @ApiOkResponse({ type: [Product] })
  @ApiBasicAuth()
  @UseGuards(AuthGuard)
  async findAll(@Query('skip') skip: string, @Query('take') take: string): Promise<Product[]> {
    return await this.productService.findAll({ skip: Number(skip), take: Number(take) });
  }
}
