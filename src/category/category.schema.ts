import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
  @Prop({ required: false, type: Number })
  id?: number;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  icon: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  sharedUrl: string;

  @Prop({ required: true })
  slug: string;

  @Prop()
  thumbnail: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
