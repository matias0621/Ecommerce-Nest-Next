import { Product } from '@prisma/client';
import { ProductService } from './products.service';
import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from "@nestjs/common";


@Controller('products')
export class ProductController{

    constructor(private productService:ProductService){}

    @Get()
    async getAllProduct(){
        return await this.productService.getAllProducts();
    }

    @Get(':id')
    async getProductById(@Param('id') id: string){
        const productFound = await this.productService.getPrductsById(Number(id));

        if (!productFound)  throw new BadRequestException('El producto no existe');

        return productFound;
    }

    @Post()
    async createProduct(@Body() data: Product){
        return await this.productService.createProduct(data);
    }
    
    @Put(':id')
    async updateProduct(@Param('id') id: string, @Body() data: Product){
        try {
            return await this.productService.updateProduct(Number(id), data)
        } catch (error) {
            throw new NotFoundException('El producto no existe');
        }
    }

    @Delete(':id')
    async deleteProduct(@Param('id') id: string, @Body() data: Product){
        try {
            return await this.productService.updateProduct(Number(id), data)
        } catch (error) {
            throw new NotFoundException('El producto no existe');
        }
    }
}