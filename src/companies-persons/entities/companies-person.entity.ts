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

const primaryGeneratedColumn = PrimaryGeneratedColumn;

@Entity()
export class CompaniesPerson {

    @primaryGeneratedColumn('increment')
    id: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => TypesPerson, {nullable: false, eager: true})
    @JoinColumn()
    typesPerson: TypesPerson;

    @ManyToOne(() => Person, {nullable: false, eager: true})
    @JoinColumn()
    person: Person;

    @ManyToOne(() => Company, {nullable: false, eager: true})
    @JoinColumn()
    company: Company;

}