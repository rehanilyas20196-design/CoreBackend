import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  async findAll() {
    return this.ordersService.findAll();
  }

  @Get('confirmed-count')
  async getConfirmedCount() {
    return this.ordersService.findConfirmedCount();
  }

  @Post()
  async create(@Body() body: any) {
    return this.ordersService.create(body);
  }

  @Patch(':id/status')
  async updateStatus(@Param('id') id: string, @Body() body: { status: string }) {
    return this.ordersService.updateStatus(parseInt(id), body.status);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.ordersService.remove(parseInt(id));
  }
}
