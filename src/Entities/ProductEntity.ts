import { Entity,Column,PrimaryGeneratedColumn } from "typeorm";
import { ManyToOne } from "typeorm";
import { CartEntity } from "./CartEntity";
import { ProducerEntity } from "./ProducerEntity";

@Entity()
export class ProductEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100, unique: true })
    name: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    price: number;

    @Column({ type: 'int' })
    stockQuantity: number;

    @Column({ type: 'varchar', length: 50, nullable: true })
    category: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    imageUrl: string;

    @ManyToOne(() => CartEntity, cart => cart.products)
    cart: CartEntity;

    @ManyToOne(() => ProducerEntity, producer => producer.products)
    producer: ProducerEntity;
}