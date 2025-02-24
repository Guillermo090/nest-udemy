import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {

    private cars = [
        {id:1, name:"Tesla", model:"Model 3"},
        {id:2, name:"Ford", model:"Mustang"},
        {id:3, name:"BMW", model:"X5"},
        {id:4, name:"Audi", model:"A6"}
    ];  

    findAll( ) {
        return this.cars;
    } 

    findOneById( id: number) {
        const car = this.cars.find(car => car.id === id);
        if (!car) throw new NotFoundException(`Car with ID ${id} not found`);
        return car;
    } 

}
