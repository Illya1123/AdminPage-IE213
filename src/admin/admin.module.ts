import { Module } from '@nestjs/common';
import AdminJS from 'adminjs';
import * as AdminJSMongoose from '@adminjs/mongoose';
import { AdminModule as AdminBroModule } from '@adminjs/nestjs';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductModule } from 'src/product/product.module';
import { Product } from 'src/product/product.schema';
import { BrandModule } from 'src/brand/brand.module';
import { Brand } from 'src/brand/brand.schema';
import { CategoryModule } from 'src/category/category.module';
import { Category } from 'src/category/category.schema';
import { ProductDetail } from 'src/product_detail/product-detail.schema';
import { OrderModule } from 'src/order/order.module';
import { Order } from 'src/order/order.schema';
import { User } from 'src/user/user.schema';
import { UserModule } from 'src/user/user.module';

AdminJS.registerAdapter(AdminJSMongoose);

@Module({
  imports: [
    AdminBroModule.createAdminAsync({
      imports: [ProductModule, BrandModule, CategoryModule, OrderModule, UserModule],
      inject: [
        getModelToken(Product.name),
        getModelToken(Brand.name),
        getModelToken(Category.name),
        getModelToken(ProductDetail.name),
        getModelToken(Order.name),
        getModelToken(User.name),
      ],
      useFactory: (
        ProductModel: Model<Product>,
        BrandModel: Model<Brand>,
        CategoryModel: Model<Category>,
        ProductDetailModel: Model<ProductDetail>,
        OrderModel: Model<Order>,
        UserModel: Model<User>,
      ) => ({
        adminJsOptions: {
          rootPath: '/admin',
          resources: [
            {
              resource: ProductModel,
            },
            {
              resource: ProductDetailModel,
            },
            {
              resource: BrandModel,
            },
            {
              resource: CategoryModel,
            },
            {
              resource: OrderModel,
            },
            {
              resource: UserModel,
            },
          ],
          dashboard: {
            component: AdminJS.bundle('./dashboard'),
          },
          branding: {
            companyName: 'ThinkProUIT',
            logo: false,
          },
        },
        auth: {
          authenticate: async (email, password) =>
            Promise.resolve({ email: 'admin@gmail.com' }),
          cookieName: 'amamov',
          cookiePassword: 'admin',
        },
      }),
    }),
  ],
})
export class AdminModule {}
