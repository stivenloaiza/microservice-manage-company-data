import {
    CreateDateColumn,
    Entity,
    JoinColumn, ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {TypesPerson} from "../../types-persons/entities/types-person.entity";
import {Person} from "../../persons/entities/person.entity";
import {Company} from "../../companies/entities/company.entity";
import { ApiProperty } from "@nestjs/swagger";

const primaryGeneratedColumn = PrimaryGeneratedColumn;

@Entity()
export class CompaniesPerson {

    @ApiProperty()
    @primaryGeneratedColumn('increment')
    id: number;

    @ApiProperty()
    @CreateDateColumn()
    createdAt: Date;

    @ApiProperty()
    @UpdateDateColumn()
    updatedAt: Date;

    @ApiProperty()
    @ManyToOne(() => TypesPerson, {nullable: false, eager: true})
    @JoinColumn()
    typesPerson: TypesPerson;

    @ApiProperty()
    @ManyToOne(() => Person, {nullable: false, eager: true})
    @JoinColumn()
    person: Person;

    @ApiProperty()
    @ManyToOne(() => Company, {nullable: false, eager: true})
    @JoinColumn()
    company: Company;

}