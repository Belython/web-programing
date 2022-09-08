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
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { HttpExceptionFilter } from '../http-exception.filter';
import { AuthGuard } from '../auth/auth.guard';

@ApiResponse({
  status: 501,
  description: 'The method is not yet implemented!',
})
@ApiResponse({
  status: 500,
  description: 'Internal Server Error',
})
@ApiBearerAuth()
@ApiTags('user')
@Controller('user')
@UseFilters(new HttpExceptionFilter())
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({
    summary: 'Find a user by ID',
  })
  @Get(':id')
  @ApiOkResponse({ type: User })
  @ApiResponse({
    status: 200,
    description: 'successful operation',
  })
  @ApiResponse({
    status: 404,
    description: 'User not found',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid ID supplied',
  })
  @ApiBasicAuth()
  @UseGuards(AuthGuard)
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return await this.userService.findOne(id);
  }

  @Post('create')
  @ApiCreatedResponse({ type: User })
  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 405, description: 'Invalid input' })
  async create(
    @Param() createUser: CreateUserDto,
    @Body() createUserDto: CreateUserDto
  ): Promise<User> {
    return await this.userService.create(createUserDto);
  }

  @ApiOperation({ summary: 'Delete user by ID ' })
  @ApiResponse({
    status: 400,
    description: 'Invalid ID supplied',
  })
  @ApiResponse({
    status: 404,
    description: 'User not found',
  })
  @Delete(':id')
  @ApiOkResponse({ type: User })
  @ApiBasicAuth()
  @UseGuards(AuthGuard)
  async remove(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return await this.userService.remove(id);
  }

  @ApiOperation({ summary: 'Update user' })
  @Patch(':id')
  @ApiCreatedResponse({ type: User })
  @ApiBasicAuth()
  @UseGuards(AuthGuard)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto
  ): Promise<User> {
    return await this.userService.update(id, updateUserDto);
  }

  @ApiOperation({ summary: 'Find all user' })
  @Get()
  @ApiOkResponse({ type: [User] })
  @ApiBasicAuth()
  @UseGuards(AuthGuard)
  async findAll(@Query('skip') skip: string, @Query('take') take: string): Promise<User[]> {
    return await this.userService.findAll({ skip: Number(skip), take: Number(take) });
  }

  @ApiOperation({
    summary: 'Find user by supertokensID',
  })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully returned.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @Get('supertokensID::supertokensID')
  async findPlanCategory(@Param('supertokensID') supertokensID: string): Promise<User> {
    return await this.userService.findUserBySupertokensID(supertokensID);
  }
}
