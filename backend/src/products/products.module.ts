import { Module } from "@nestjs/common";
import { ProductController } from "./products.controller";
import { ProductService } from "./products.service";
import { PrismaModule } from "src/prisma/prisma.module";


@Module({
    controllers:[ProductController],
    providers:[ProductService],
    imports:[PrismaModule]
})export class ProductModule{}