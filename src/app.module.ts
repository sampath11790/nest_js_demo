import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Productmodule } from './Product/product.module';
// import { demoProductmodule } from './Demo/demo.module';
// import { TypeOrmModuleOptions } from '@nestjs/typeorm';
// import { productEntity } from './Product/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm/dist';

@Module({
  //demoProductmodule
  imports: [Productmodule], //this is main module and it depends this imported modules
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
