import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable()
export class UploadService {
  constructor(private supabase: SupabaseService) {}

  async uploadPaymentScreenshot(file: Express.Multer.File) {
    const fileName = `${Date.now()}-${file.originalname}`;

    const { data: uploadData, error: uploadError } = await this.supabase
      .storage()
      .from('payment-screenshots')
      .upload(fileName, file.buffer, {
        contentType: file.mimetype,
      });

    if (uploadError) throw uploadError;

    const { data: { publicUrl } } = this.supabase
      .storage()
      .from('payment-screenshots')
      .getPublicUrl(fileName);

    return { url: publicUrl, fileName };
  }
}
