import {IsInt, Min} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateCompaniesPersonDto {

    @ApiProperty()
    @IsInt()
    @Min(0)
    company;

    @ApiProperty()
    @IsInt()
    @Min(0)
    person;

    @ApiProperty()
    @IsInt()
    @Min(0)
    typesPerson;

}
