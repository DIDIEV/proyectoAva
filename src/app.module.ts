import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartEntity } from './Entities/CartEntity';
import { PaymentEntity } from './Entities/PaymentEntity';
import { ProducerEntity } from './Entities/ProducerEntity';
import { ProductEntity } from './Entities/ProductEntity';
import { UserEntity } from './Entities/UserEntity';
import { CartModule } from './modules/cart/cart.module';
import { UserModule } from './modules/cart/user/user.module';
import { PaymentModule } from './modules/cart/payment/payment.module';
import { ProducerModule } from './modules/cart/producer/producer.module';
import { ProductModule } from './modules/cart/product/product.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'KaptchyMarket',
      entities: [CartEntity,PaymentEntity,ProducerEntity,ProductEntity,UserEntity],
      autoLoadEntities: true,
      synchronize: true,
    }),
    CartModule,
    UserModule,
    PaymentModule,
    ProducerModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
