import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Brand, BrandSchema } from '../brand/brand.schema';

export type ProductDocument = Product & Document;

export class Color {
  name: string;

  code: string;
}

@Schema()
export class Product {
  @Prop()
  skuId: number;

  @Prop()
  productId: number;

  @Prop()
  categoryId: number;

  @Prop()
  sharedUrl: string;

  @Prop()
  slug: string;

  @Prop()
  image: string;

  @Prop()
  name: string;

  @Prop({ type: BrandSchema, _id: false })
  brand: Brand;

  @Prop({ type: [{ name: String, code: String }], required: true, _id: false })
  colors: Color[];

  @Prop()
  price: number;

  @Prop({ type: [String] })
  modelValues: string[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
