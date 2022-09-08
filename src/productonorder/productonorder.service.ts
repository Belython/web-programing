import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductonorderDto } from './dto/create-productonorder.dto';
import { UpdateProductonorderDto } from './dto/update-productonorder.dto';
import { PrismaService } from '../prisma.service';
import { Productonorder } from './entities/productonorder.entity';

@Injectable()
export class ProductonorderService {
  constructor(public readonly prismaService: PrismaService) {}

  async create(createProductonorderDto: CreateProductonorderDto): Promise<Productonorder> {
    return this.prismaService.productonorder.create({
      data: createProductonorderDto,
    });
  }

  async findAll() {
    return await this.prismaService.productonorder.findMany();
  }

  async update(
    id: number,
    updateProductonorderDto: UpdateProductonorderDto
  ): Promise<Productonorder> {
    try {
      return this.prismaService.productonorder.update({
        where: {
          id: id,
        },
        data: updateProductonorderDto,
      });
    } catch (error) {
      throw new HttpException('Productonorder not found', HttpStatus.NOT_FOUND);
    }
  }

  async remove(id: number): Promise<Productonorder> {
    try {
      return this.prismaService.productonorder.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new HttpException('Productonorder not found', HttpStatus.NOT_FOUND);
    }
  }
}
