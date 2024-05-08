import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

export class Product {
  productId: string;
  quantity: number;
}

@Schema()
export class Order {
  @Prop({ type: 'ObjectId', required: true })
  userId: string;

  @Prop({
    type: [
      {
        productId: { type: 'ObjectId', required: true },
        quantity: { type: Number, required: true },
      },
    ],
    required: true,
    _id: false,
  })
  products: Product;

  @Prop()
  name: string;

  @Prop()
  totalPrice: number;

  @Prop()
  address: string;

  @Prop()
  phoneNumber: string;

  @Prop()
  paymentMethod: string;

  @Prop({ type: String, default: 'pending' })
  status: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
