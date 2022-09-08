import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService, LoggingInterceptor } from './app.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { UserService } from './user/user.service';
import { OrderController } from './order/order.controller';
import { ProductController } from './product/product.controller';
import { ProductonorderModule } from './productonorder/productonorder.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';
import { ProductonorderController } from './productonorder/productonorder.controller';
import { OrderService } from './order/order.service';
import { ProductService } from './product/product.service';
import { ProductonorderService } from './productonorder/productonorder.service';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './http-exception.filter';
import { AuthModule } from './auth/auth.module';
import { AppGateway } from './app.gateway';

@Module({
  imports: [
    AuthModule.forRoot({
      // These are the connection details of the app you created on supertokens.com
      connectionURI: 'https://ffa63a71d54011ecb6281b2b0cb888eb-eu-west-1.aws.supertokens.io:3567',
      apiKey: 'c9UE3UA9UvDAvbMgMVJpM6Kqwqwftg',
      appInfo: {
        // Learn more about this on https://supertokens.com/docs/thirdparty/appinfo
        appName: 'arcane-crag-35636',
        apiDomain: 'https://arcane-crag-35636.herokuapp.com',
        websiteDomain: 'https://arcane-crag-35636.herokuapp.com',
        apiBasePath: '/api',
        websiteBasePath: '/auth',
      },
    }),
    ProductonorderModule,
    OrderModule,
    ProductModule,
    UserModule,
  ],
  controllers: [
    AppController,
    OrderController,
    ProductController,
    UserController,
    ProductonorderController,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    UserService,
    OrderService,
    ProductService,
    ProductonorderService,
    AppGateway,
  ],
})
export class AppModule {}
