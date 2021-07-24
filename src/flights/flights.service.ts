import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Flight, FlightDocument } from 'src/schemas/flight.schema';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';

@Injectable()
export class FlightsService {
  constructor(@InjectModel(Flight.name) private flightModel: Model<FlightDocument>) {}
  create(createFlightDto: CreateFlightDto) {
    return new this.flightModel(createFlightDto).save();
  }

  findAll() {
    return this.flightModel.find();
  }

  findOne(name:string) {
    return this.flightModel.findOne({name});
  }

  update(name: string, updateFlightDto: UpdateFlightDto) {
    return this.flightModel.updateOne({name},{$set:{...updateFlightDto}});
  }

  remove(name: string) {
    return this.flightModel.deleteOne({name});
  }
}
