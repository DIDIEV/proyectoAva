import { Entity,Column,PrimaryGeneratedColumn } from "typeorm";
import { OneToOne, JoinColumn } from "typeorm";
import { CartEntity } from "./CartEntity";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 50, unique: true })
    username: string;

    @Column({ type: 'varchar', length: 100 })
    password: string;

    @Column({ type: 'varchar', length: 100, unique: true })
    email: string;
    
    @Column({ type: 'varchar', length: 15, nullable: true })
    address: string;

    @OneToOne(() => CartEntity, cart => cart.user)
    @JoinColumn()
    cart: CartEntity;
}