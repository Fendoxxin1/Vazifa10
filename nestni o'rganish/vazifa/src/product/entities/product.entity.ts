import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Category } from '../category/category.schema';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop()
  price: number;

  @Prop({ type: Types.ObjectId, ref: 'Category' })
  category: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
