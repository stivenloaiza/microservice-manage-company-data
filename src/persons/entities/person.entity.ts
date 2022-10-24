import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

const primaryGeneratedColumn = PrimaryGeneratedColumn;

@Entity()
export class Person {

    @ApiProperty()
    @primaryGeneratedColumn('increment')
    id: number;

    @ApiProperty()
    @Column({
        nullable: true,
    })
    country: string;

    @ApiProperty()
    @Column({
        nullable: false,
        unique: true
    })
    fullName: string;

    @ApiProperty()
    @Column({
        nullable: false,
        unique: true
    })
    identificationNumber: string;

    @ApiProperty()
    @Column({
        nullable: true,
    })
    mainPhoneNumber: string;

    @ApiProperty()
    @Column({
        nullable: true,
    })
    mainEmail: string;

    @ApiProperty()
    @Column({
        nullable: true,
    })
    mainAddress: string;

    @ApiProperty()
    @CreateDateColumn()
    createdAt: Date;

    @ApiProperty()
    @UpdateDateColumn()
    updatedAt: Date;

}
