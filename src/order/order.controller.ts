import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
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
import { OrderService } from './order.service';
import { UpdateOrderDto } from './dto/update-order.dto';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';
import { HttpExceptionFilter } from '../http-exception.filter';
import { AuthGuard } from '../auth/auth.guard';

@ApiResponse({
  status: 501,
  description: 'The method is not yet implemented!',
})
@ApiBearerAuth()
@ApiTags('order')
@Controller('order')
@UseFilters(new HttpExceptionFilter())
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @ApiOperation({
    summary: 'Find a order by ID',
  })
  @Get(':id')
  @ApiOkResponse({ type: Order })
  @ApiResponse({
    status: 200,
    description: 'successful operation',
  })
  @ApiResponse({
    status: 404,
    description: 'Order not found',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid ID supplied',
  })
  @ApiBasicAuth()
  @UseGuards(AuthGuard)
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Order> {
    return await this.orderService.findOne(id);
  }

  @Post('create')
  @ApiCreatedResponse({ type: Order })
  @ApiOperation({ summary: 'Create order' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 405, description: 'Invalid input' })
  @ApiBasicAuth()
  @UseGuards(AuthGuard)
  async create(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
    return await this.orderService.create(createOrderDto);
  }

  @ApiOperation({ summary: 'Delete order by ID ' })
  @ApiResponse({
    status: 400,
    description: 'Invalid ID supplied',
  })
  @ApiResponse({
    status: 404,
    description: 'order not found',
  })
  @Delete(':id')
  @ApiOkResponse({ type: Order })
  @ApiBasicAuth()
  @UseGuards(AuthGuard)
  async remove(@Param('id', ParseIntPipe) id: number): Promise<Order> {
    return await this.orderService.remove(id);
  }

  @ApiOperation({ summary: 'Update order' })
  @Patch(':id')
  @ApiCreatedResponse({ type: Order })
  @ApiBasicAuth()
  @UseGuards(AuthGuard)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateOrderDto: UpdateOrderDto
  ): Promise<Order> {
    return await this.orderService.update(id, updateOrderDto);
  }

  @ApiOperation({ summary: 'Find all order' })
  @Get()
  @ApiOkResponse({ type: [Order] })
  @ApiBasicAuth()
  @UseGuards(AuthGuard)
  async findAll() {
    return await this.orderService.findAll();
  }
}
