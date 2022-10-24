import {IsString} from "class-validator";

export class CreateTypesPersonDto {

    @IsString()
    type?: string;

    @IsString()
    description?: string;

}