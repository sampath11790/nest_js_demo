import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('demoproduct')
export class productEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  Qty: number;
}
