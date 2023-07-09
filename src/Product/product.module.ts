import { Module } from '@nestjs/common';
import { productController } from './product.controller';
import { productService } from './product.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { productEntity } from './product.entity';
// import { TypeOrmModule } from '@nestjs/typeorm/dist';
// const typeOrmConfig: TypeOrmModuleOptions = {
//   type: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   username: 'postgres',
//   password: 'sampath',
//   database: 'products',
//   entities: [productEntity],
//   synchronize: true,
// };
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'sampath',
      database: 'products',
      entities: [productEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([productEntity]),
  ], //if its depends other moduls
  controllers: [productController],
  providers: [productService],
})
export class Productmodule {}
