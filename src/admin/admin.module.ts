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

AdminJS.registerAdapter(AdminJSMongoose);

@Module({
  imports: [
    AdminBroModule.createAdminAsync({
      imports: [ProductModule, BrandModule],
      inject: [getModelToken(Product.name), getModelToken(Brand.name)],
      useFactory: (ProductModel: Model<Product>, BrandModel: Model<Brand>) => ({
        adminJsOptions: {
          rootPath: '/admin',
          resources: [
            {
              resource: ProductModel,
              options: {
                properties: {
                  contents: { type: 'richtext' },
                },
              },
            },
            {
              resource: BrandModel,
              options: {
                properties: {
                  contents: { type: 'richtext' },
                },
              },
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
