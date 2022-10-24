import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";

const primaryGeneratedColumn = PrimaryGeneratedColumn;

@Entity()
export class Person {

    @primaryGeneratedColumn('increment')
    id: number;

    @Column({
        nullable: true,
    })
    country: string;

    @Column({
        nullable: false,
        unique: true
    })
    fullName: string;

    @Column({
        nullable: false,
        unique: true
    })
    identificationNumber: string;

    @Column({
        nullable: true,
    })
    mainPhoneNumber: string;

    @Column({
        nullable: true,
    })
    mainEmail: string;

    @Column({
        nullable: true,
    })
    mainAddress: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}
