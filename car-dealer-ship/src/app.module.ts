import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';
import { CarmodelModule } from './carmodel/carmodel.module';

@Module({
  imports: [CarsModule, BrandsModule, CarmodelModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
