import { Entity,Column,PrimaryGeneratedColumn } from "typeorm";
import { OneToOne, JoinColumn } from "typeorm";
import { UserEntity } from "./UserEntity";
import { OneToMany } from "typeorm";
import { ProductEntity } from "./ProductEntity";
import { PaymentEntity } from "./PaymentEntity";

@Entity('Cart')
export class CartEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    addedDate: Date;

    @Column({ type: 'int' })
    value: number;

    @OneToOne(() => UserEntity, user => user.cart)
    @JoinColumn()
    user: UserEntity;

    @OneToMany(() => ProductEntity, product => product.cart)
    products: ProductEntity[];

    @OneToOne(() => PaymentEntity, payment => payment.cart)
    @JoinColumn()
    payment: PaymentEntity;
}