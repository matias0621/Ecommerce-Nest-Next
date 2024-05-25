import { Module } from '@nestjs/common';
import { ProductModule } from './products/products.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ProductModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
