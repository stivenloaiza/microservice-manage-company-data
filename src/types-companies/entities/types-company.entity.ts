import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

const primaryGeneratedColumn = PrimaryGeneratedColumn;

@Entity()
export class TypesCompany {
    @primaryGeneratedColumn('increment')
    id: number;

    @Column({
        nullable: false,
        unique: true
    })
    type: string;

    @Column()
    description: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}
