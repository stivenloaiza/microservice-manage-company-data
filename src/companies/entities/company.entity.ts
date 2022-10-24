import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn, ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {TypesCompany} from "../../types-companies/entities/types-company.entity";
import { ApiProperty } from "@nestjs/swagger";

const primaryGeneratedColumn = PrimaryGeneratedColumn;

@Entity()
export class Company {

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
        nullable: true,
    })
    acronym: string;

    @ApiProperty()
    @Column({
        nullable: false,
        unique: true
    })
    companyName: string;

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

    @ApiProperty()
    @ManyToOne(() => TypesCompany, {nullable: false, eager: true})
    @JoinColumn()
    typesCompany: TypesCompany;

}
