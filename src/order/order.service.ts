import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from '../prisma.service';
import { Order } from '@prisma/client';

@Injectable()
export class OrderService {
  constructor(public readonly prismaService: PrismaService) {}
  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    return this.prismaService.order.create({
      data: createOrderDto,
    });
  }

  async findAll() {
    return await this.prismaService.order.findMany();
  }

  async findOne(id: number) {
    const order = await this.prismaService.order.findUnique({
      where: { id },
    });
    if (!order) {
      throw new HttpException('Order not found', HttpStatus.NOT_FOUND);
    }
    return order;
  }

  async update(id: number, updateOrderDto: UpdateOrderDto): Promise<Order> {
    try {
      return this.prismaService.order.update({
        where: {
          id: id,
        },
        data: updateOrderDto,
      });
    } catch (error) {
      throw new HttpException('Order not found', HttpStatus.NOT_FOUND);
    }
  }

  async remove(id: number): Promise<Order> {
    try {
      return this.prismaService.order.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new HttpException('Order not found', HttpStatus.NOT_FOUND);
    }
  }
}
