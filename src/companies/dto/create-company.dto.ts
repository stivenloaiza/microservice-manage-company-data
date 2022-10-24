import {IsEmail, IsInt, IsOptional, IsString, Min, MinLength} from "class-validator";

export class CreateCompanyDto {

    @IsInt()
    @Min(0)
    typesCompany;

    @IsString()
    @IsOptional()
    country?: string;

    @IsString()
    @IsOptional()
    acronym?: string;

    @IsString()
    @MinLength(1)
    companyName: string;

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
