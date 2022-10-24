import { Controller, Get } from "@nestjs/common";
import { TypesCompaniesService } from './types-companies.service';
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { TypesCompany } from "./entities/types-company.entity";


@ApiTags('Types Companies')
@Controller('types-companies')
export class TypesCompaniesController {
  constructor(private readonly typesCompaniesService: TypesCompaniesService) {}

  @Get()
  @ApiOperation({ summary: 'Get all Types Company, paginated' })
  @ApiResponse({ status: 200, description: 'Successful', type: [TypesCompany] })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findAll() {
    return this.typesCompaniesService.findAll();
  }

}
