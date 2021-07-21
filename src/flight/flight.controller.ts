import { Body, Controller , Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { FlightService } from './flight.service';
import { flightDto } from './flight.dto'


@Controller('nestflight')
export class FlightController {
    constructor(private flightService : FlightService){}

    @Get()
    public getFlight(){
        return this.flightService.getFlight();
    }
    @Post()
    public postFlight(@Body() flight:flightDto){
        return this.flightService.postFlight(flight);
    }

    @Get(':id')
    public getIdByFlight(@Param('id') id:number){
        return this.flightService.getIdByFlight(id);
    }

    @Delete(':id')
    public deleteFlight(@Param('id') id:number){
        return this.flightService.deleteFlight(id);
    }

    @Put(':id')
    public putFlight(@Param('id') id:number,@Query() query){
        const propertyName = query.propertyName;
        const propertyValue = query.propertyValue;
        return this.flightService.putFlight(id,propertyName,propertyValue);
    }

   

    

    
}
