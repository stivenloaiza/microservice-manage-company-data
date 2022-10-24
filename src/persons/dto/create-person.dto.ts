import {IsEmail, IsOptional, IsString, MinLength} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreatePersonDto {

    @ApiProperty()
    @IsString()
    @IsOptional()
    country?: string;

    @ApiProperty()
    @IsString()
    @MinLength(1)
    fullName: string;

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