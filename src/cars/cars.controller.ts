import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { createCarDto, updateCarDto } from './dto';

@Controller('cars')
@UsePipes( ValidationPipe )
export class CarsController {

    constructor(
        private readonly carsService: CarsService,
    ){}

    @Get()
    getAllCars(){
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById( @Param('id' , new ParseUUIDPipe({ version: '4', errorHttpStatusCode: HttpStatus.NOT_FOUND  }) ) id: string ) {
  
      return this.carsService.findOneById( id );
    }

    @Post()
    createCar( @Body() createCarDto: createCarDto ) {
      return this.carsService.create( createCarDto );
    }
  
    @Patch(':id')
    updateCar( 
      @Param('id', ParseUUIDPipe) id: string,
      @Body() updateCarDto: updateCarDto 
    ) 
    {
      return this.carsService.update( id, updateCarDto );
    }
  
    @Delete(':id')
    deleteCar( @Param('id', ParseIntPipe ) id: number ) {
      return {
        method: 'delete',
        id
      };
    }
}
