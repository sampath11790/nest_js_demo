import { Body, Controller, Get } from '@nestjs/common/decorators';
import { Post } from '@nestjs/common/decorators';
import { productService } from './product.service';
import { Delete, Param } from '@nestjs/common/decorators/http';
import { BadRequestException } from '@nestjs/common';
@Controller('data')
export class productController {
  constructor(private readonly productService: productService) {}
  @Post()
  async Adddata(
    // @Body()completebody:{name:string,Qty:number}
    @Body('name') name: string,
    @Body('Qty') Qty: number,
  ) {
    const product = await this.productService.additem(name, Qty);

    return { product };
  }
  @Get()
  async getProducts() {
    const data = await this.productService.getItems();
    // console.log('hi');
    return data;
  }
  @Get(':id')
  async getProduct(@Param('id') id: string) {
    const parsedId = parseInt(id, 10);

    if (isNaN(parsedId)) {
      throw new BadRequestException('Invalid ID');
    }
    const data = await this.productService.getItem(parsedId);
    if (data) {
      return data;
    } else {
      return 'data not fount ';
    }
  }
  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    const parsedId = parseInt(id, 10);

    if (isNaN(parsedId)) {
      throw new BadRequestException('Invalid ID');
    }
    const data = this.productService.deleteProductgetItem(parsedId);
    return data;
  }
}
