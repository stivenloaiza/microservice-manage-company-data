import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompaniesModule } from './companies/companies.module';
import { CommonModule } from './common/common.module';
import { TypesCompaniesModule } from './types-companies/types-companies.module';
import { PersonsModule } from './persons/persons.module';
import { TypesPersonsModule } from './types-persons/types-persons.module';
import { CompaniesPersonsModule } from './companies-persons/companies-persons.module';

@Module({
  imports: [
      ConfigModule.forRoot(),
      TypeOrmModule.forRoot({
          type: 'postgres',
          host: process.env.DB_HOST,
          port: +process.env.DB_PORT,
          username: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
          schema: process.env.DB_SCHEMA,
          autoLoadEntities: true,
          synchronize: true,
      }),
      TypesCompaniesModule,
      CompaniesModule,
      CommonModule,
      PersonsModule,
      TypesPersonsModule,
      CompaniesPersonsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
