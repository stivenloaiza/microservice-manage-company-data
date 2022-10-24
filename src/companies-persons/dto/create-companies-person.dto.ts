import {IsInt, Min} from "class-validator";

export class CreateCompaniesPersonDto {

    @IsInt()
    @Min(0)
    company;

    @IsInt()
    @Min(0)
    person;

    @IsInt()
    @Min(0)
    typesPerson;

}
