import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('payment-screenshot')
  @UseInterceptors(FileInterceptor('file'))
  async uploadPaymentScreenshot(@UploadedFile() file: Express.Multer.File) {
    return this.uploadService.uploadPaymentScreenshot(file);
  }
}
