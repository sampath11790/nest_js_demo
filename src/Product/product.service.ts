import { Product } from './product.model';
import { DeleteResult } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';
import { productEntity } from './product.entity';
@Injectable()
export class productService {
  constructor(
    @InjectRepository(productEntity)
    private productRepository: Repository<productEntity>,
  ) {}
  product: Product[] = [];
  async additem(name: string, Qty: number): Promise<productEntity> {
    try {
      const newProduct = await this.productRepository.create({ name, Qty });
      const data = await this.productRepository.save(newProduct);
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }

    // const newProduct = new Product(id, name, Qty);
    // this.product.push(newProduct);
    // return { id: id };
  }
  async getItems(): Promise<productEntity[]> {
    return await this.productRepository.find();
  }
  getItem(id: number): Promise<productEntity> {
    return this.productRepository.findOne({ where: { id } });
  }
  deleteProductgetItem(id: number): Promise<DeleteResult> {
    return this.productRepository.delete({ id });
  }
}
