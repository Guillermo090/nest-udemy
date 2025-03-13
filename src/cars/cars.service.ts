import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        {
            id:uuid(), 
            brand:"Tesla", 
            model:"Model 3"
        },
        {
            id:uuid(), 
            brand:"Ford", 
            model:"Mustang"
        },
        {
            id:uuid(), 
            brand:"BMW", 
            model:"X5"},
        {
            id:uuid(), 
            brand:"Audi", 
            model:"A6"
        },
        {
            id:uuid(), 
            brand:"BMW", 
            model:"X5"
        },
        {
            id:uuid(), 
            brand:"Audi", 
            model:"A6"
        }
    ];  

    findAll( ) {
        return this.cars;
    } 

    findOneById( id: string) {
        const car = this.cars.find(car => car.id === id);
        if (!car) throw new NotFoundException(`Car with ID ${id} not found`);
        return car;
    } 

}
