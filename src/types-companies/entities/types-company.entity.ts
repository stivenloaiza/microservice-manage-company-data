import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

const primaryGeneratedColumn = PrimaryGeneratedColumn;

@Entity()
export class TypesCompany {

    @ApiProperty()
    @primaryGeneratedColumn('increment')
    id: number;

    @ApiProperty()
    @Column({
        nullable: false,
        unique: true
    })
    type: string;

    @ApiProperty()
    @Column()
    description: string;

    @ApiProperty()
    @CreateDateColumn()
    createdAt: Date;

    @ApiProperty()
    @UpdateDateColumn()
    updatedAt: Date;

}
