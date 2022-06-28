import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class user {
    @PrimaryGeneratedColumn({ name: 'user_id' })
    userId: number;
    @Column()
    name: string;
    @Column()
    email: string;
    @Column()
    password: string;
    @Column()
    cpf: string;
}
