import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FlightsService } from './flights.service';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';

@Controller('flights')
export class FlightsController {
  constructor(private readonly flightsService: FlightsService) {}

  @Post()
  create(@Body() createFlightDto: CreateFlightDto) {
    return this.flightsService.create(createFlightDto);
  }

  @Get()
  findAll() {
    return this.flightsService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.flightsService.findOne(name);
  }

  @Patch(':name')
  update(@Param('name') name: string, @Body() updateFlightDto: UpdateFlightDto) {
    return this.flightsService.update(name, updateFlightDto);
  }

  @Delete(':name')
  remove(@Param('name') name: string) {
    return this.flightsService.remove(name);
  }
}
