import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BrandDocument = Brand & Document;

@Schema()
export class Brand {
  @Prop({ required: false })
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

  @Prop({ required: false })
  parentId: number | null;
}

export const BrandSchema = SchemaFactory.createForClass(Brand);
