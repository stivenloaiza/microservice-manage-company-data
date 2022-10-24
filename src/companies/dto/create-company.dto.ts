import {IsEmail, IsInt, IsOptional, IsString, Min, MinLength} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateCompanyDto {

    @ApiProperty()
    @IsInt()
    @Min(0)
    typesCompany;

    @ApiProperty()
    @IsString()
    @IsOptional()
    country?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    acronym?: string;

    @ApiProperty()
    @IsString()
    @MinLength(1)
    companyName: string;

    @ApiProperty()
    @IsString()
    @MinLength(1)
    identificationNumber: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    mainPhoneNumber?: string;

    @ApiProperty()
    @IsEmail()
    @IsOptional()
    mainEmail?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    mainAddress?: string;

}
