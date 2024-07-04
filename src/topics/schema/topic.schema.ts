import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type TopicDocument = Topic & Document;

@Schema()
export class Topic {
  @Prop()
  user: string

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  community: string;

  @Prop({default:0})
  comment: number

  @Prop({ default: Date.now })
  timestamp: Date;
}

export const TopicSchema = SchemaFactory.createForClass(Topic);
