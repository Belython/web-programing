import { Module } from '@nestjs/common';
import { ProductonorderService } from './productonorder.service';
import { ProductonorderController } from './productonorder.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [ProductonorderController],
  providers: [ProductonorderService, PrismaService],
  exports: [PrismaService],
})
export class ProductonorderModule {}
