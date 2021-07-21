import { HttpException, Injectable } from '@nestjs/common';
import { Flights } from './flight.sample';

@Injectable()
export class FlightService {
    
    private flights = Flights;
   

    public getFlight() {
        return this.flights;
    }

    public postFlight(flight) {
        return this.flights.push(flight);
    }

    public getIdByFlight(id:number):Promise<any> {
        const flightId = Number(id);
        return new Promise((resolve)=>{
        const flight = this.flights.find((flight)=> flight.id === flightId);
        if(!flight){
            throw new HttpException('Not Found',404);
        }
        return resolve(flight);
    });
    }

    public deleteFlight(id:number):Promise<any> {
        const flightId = Number(id);
        return new Promise((resolve)=>{
        const index = this.flights.findIndex((flight)=> flight.id === flightId);
        if(index === -1){
            throw new HttpException('Not Found',404);
        }
        this.flights.splice(index,1);
        return resolve(this.flights);
    });
    }

    public putFlight(id:number,propertyName:string,propertyValue:string):Promise<any> {
        const flightId = Number(id);
        return new Promise((resolve)=>{
        const index = this.flights.findIndex((flight)=> flight.id === flightId);
        if(index === -1){
            throw new HttpException('Not Found',404);
        }
        this.flights[index][propertyName] = propertyValue;
        return resolve(this.flights);
    });
    }

}
