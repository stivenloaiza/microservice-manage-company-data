import {IsEmail, IsOptional, IsString, MinLength} from "class-validator";

export class CreatePersonDto {

    @IsString()
    @IsOptional()
    country?: string;

    @IsString()
    @MinLength(1)
    fullName: string;

    @IsString()
    @MinLength(1)
    identificationNumber: string;

    @IsString()
    @IsOptional()
    mainPhoneNumber?: string;

    @IsEmail()
    @IsOptional()
    mainEmail?: string;

    @IsString()
    @IsOptional()
    mainAddress?: string;

}