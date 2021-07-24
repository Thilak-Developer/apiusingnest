import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { FlightsModule } from './flights/flights.module';

@Module({
  imports: [FlightsModule,MongooseModule.forRoot('mongodb://localhost/FlightNestApi')],
})
export class AppModule {}
