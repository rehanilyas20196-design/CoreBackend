import { Body, Controller, Post } from '@nestjs/common';
import { SupplierInquiriesService } from './supplier-inquiries.service';

@Controller('supplier-inquiries')
export class SupplierInquiriesController {
  constructor(private readonly supplierInquiriesService: SupplierInquiriesService) {}

  @Post()
  async create(@Body() body: any) {
    return this.supplierInquiriesService.create(body);
  }
}
