import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SupabaseModule } from './supabase/supabase.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { ReviewsModule } from './reviews/reviews.module';
import { DealsModule } from './deals/deals.module';
import { RecommendedItemsModule } from './recommended-items/recommended-items.module';
import { SupplierInquiriesModule } from './supplier-inquiries/supplier-inquiries.module';
import { AuthModule } from './auth/auth.module';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SupabaseModule,
    ProductsModule,
    OrdersModule,
    ReviewsModule,
    DealsModule,
    RecommendedItemsModule,
    SupplierInquiriesModule,
    AuthModule,
    UploadModule,
  ],
})
export class AppModule {}
