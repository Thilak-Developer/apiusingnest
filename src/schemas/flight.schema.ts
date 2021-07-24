import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FlightDocument = Flight & Document;

@Schema()
export class Flight {
  @Prop()
  name: string;

  @Prop()
  owner: string;

  @Prop()
  pilot: string;
}

export const FlightSchema = SchemaFactory.createForClass(Flight);