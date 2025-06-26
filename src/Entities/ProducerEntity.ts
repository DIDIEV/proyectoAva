import { Entity,Column,PrimaryGeneratedColumn } from "typeorm";
import { OneToMany } from "typeorm";
import { ProductEntity } from "./ProductEntity";

@Entity()
export class ProducerEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 50, unique: true })
    name: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    description: string;

    @Column({ type: 'varchar', length: 100, unique: true })
    email: string;

    @Column({ type: 'varchar', length: 15, nullable: true })
    phoneNumber: string;

    @OneToMany(() => ProductEntity, product => product.producer)
    products: ProductEntity[];
}