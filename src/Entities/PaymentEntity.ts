import { Entity,Column,PrimaryGeneratedColumn } from "typeorm";
import { OneToOne, JoinColumn } from "typeorm";
import { CartEntity } from "./CartEntity";

@Entity()
export class PaymentEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int' })
    userId: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    amount: number;

    @Column({ type: 'varchar', length: 50 })
    paymentMethod: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    paymentDate: Date;

    @Column({ type: 'varchar', length: 100, nullable: true })
    transactionId: string;

    @OneToOne(() => CartEntity)
    @JoinColumn()
    cart: CartEntity;
}