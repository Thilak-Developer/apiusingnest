import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Flight, FlightDocument } from 'src/schemas/flight.schema';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';

@Injectable()
export class FlightsService {
  constructor(@InjectModel(Flight.name) private flightModel: Model<FlightDocument>) {}


  async create(createFlightDto: CreateFlightDto): Promise<Flight> {
    return await new this.flightModel(createFlightDto).save();
  }

  async findAll(): Promise<Flight[]> {
    return await this.flightModel.find().exec();
  }

  async findOne(name:string): Promise<Flight> {
    return await this.flightModel.findOne({name});
  }

  async update(name: string, updateFlightDto: UpdateFlightDto): Promise<any> {
    return await this.flightModel.updateOne({name},{$set:{...updateFlightDto}});
  }

  async remove(name: string): Promise<any> {
    return await this.flightModel.deleteOne({name});
  }
}
