import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn, ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {TypesCompany} from "../../types-companies/entities/types-company.entity";

const primaryGeneratedColumn = PrimaryGeneratedColumn;

@Entity()
export class Company {

    @primaryGeneratedColumn('increment')
    id: number;

    @Column({
        nullable: true,
    })
    country: string;

    @Column({
        nullable: true,
    })
    acronym: string;

    @Column({
        nullable: false,
        unique: true
    })
    companyName: string;

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

    @ManyToOne(() => TypesCompany, {nullable: false, eager: true})
    @JoinColumn()
    typesCompany: TypesCompany;

}
