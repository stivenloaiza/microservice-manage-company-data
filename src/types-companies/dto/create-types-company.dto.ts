import {IsString} from "class-validator";

export class CreateTypesCompanyDto {

    @IsString()
    type?: string;

    @IsString()
    description?: string;

}
