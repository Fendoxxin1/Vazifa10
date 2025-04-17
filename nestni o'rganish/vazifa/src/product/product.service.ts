import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './product.schema';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const created = new this.productModel(createProductDto);
    return created.save();
  }

  async findAll(query: any) {
    const {
      page = 1,
      limit = 10,
      sortBy = 'name',
      order = 'asc',
      minPrice,
      maxPrice,
      name,
    } = query;

    const filter: any = {};

    if (name) filter.name = { $regex: name, $options: 'i' };
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = +minPrice;
      if (maxPrice) filter.price.$lte = +maxPrice;
    }

    const sortOption: any = {};
    sortOption[sortBy] = order === 'asc' ? 1 : -1;

    const skip = (page - 1) * limit;

    const [products, total] = await Promise.all([
      this.productModel
        .find(filter)
        .sort(sortOption)
        .skip(skip)
        .limit(+limit)
        .populate('category'),
      this.productModel.countDocuments(filter),
    ]);

    return {
      total,
      page: +page,
      limit: +limit,
      data: products,
    };
  }

  async findOne(id: string) {
    return this.productModel.findById(id).populate('category');
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    return this.productModel.findByIdAndUpdate(id, updateProductDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return this.productModel.findByIdAndDelete(id);
  }

  async findByCategory(categoryId: string) {
    return this.productModel.find({ category: categoryId }).populate('category');
  }
}
