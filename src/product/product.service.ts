import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '../prisma.service';
import { Product } from '@prisma/client';
@Injectable()
export class ProductService {
  constructor(public readonly prismaService: PrismaService) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    return this.prismaService.product.create({
      data: createProductDto,
    });
  }

  async findAll(params: { skip?: number; take?: number }): Promise<Product[]> {
    const { skip, take } = params;
    if (isNaN(skip)) {
      return await this.prismaService.product.findMany({
        take,
      });
    } else {
      return await this.prismaService.product.findMany({
        skip,
        take,
      });
    }
  }

  async findOne(id: number) {
    const product = await this.prismaService.product.findUnique({
      where: { id },
    });
    if (!product) {
      throw new HttpException('product not found', HttpStatus.NOT_FOUND);
    }
    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto): Promise<Product> {
    try {
      return this.prismaService.product.update({
        where: {
          id: id,
        },
        data: updateProductDto,
      });
    } catch (error) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }
  }

  async remove(id: number): Promise<Product> {
    try {
      return this.prismaService.product.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }
  }
}
