import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async getAllProducts(): Promise<Product[]> {
    return this.prisma.product.findMany();
  }

  async getPrductsById(id: number): Promise<Product> {
    return this.prisma.product.findUnique({
      where: {
        id,
      },
    });
  }

  async createProduct(data: Product): Promise<Product> {
    return this.prisma.product.create({
      data,
    });
  }

  async updateProduct(id: number, data: Product): Promise<Product> {
    return this.prisma.product.update({
      where: {
        id,
      },
      data,
    });
  }

  async deteleProduct(id: number): Promise<Product> {
    return this.prisma.product.delete({ where: { id } });
  }
}
