import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Category } from '@prisma/client';
import { ProductsRepository } from './products.repository';

export interface Product {
    id: String;
    name: string;   
    description?: string;
    price: number;        
    balance: number;                 
    isAvailable: boolean;  
    category: Category;     
    tags: string[];
    createdAt: string | Date | undefined;
    updatedAt: string | Date | undefined | null;
}

type CreateProductServiceResponse = {
    products: Product[];
}

@Injectable()
export class FetchRecentsProductsService {
  constructor(private productRepository: ProductsRepository) {}

  async execute(): Promise<CreateProductServiceResponse> {
    const products = await this.productRepository.findManyRecent();

    const newProducts: Product [] = [];

    if (products) {
        for (const product of products) {
            newProducts.push({
                id: product.id?.toString() || "",
                name: product.name,
                description: product.description,
                price: product.price,
                balance: product.balance,
                isAvailable: product.isAvailable,
                category: product.category,
                tags: product.tags,
                createdAt: product.createdAt,
                updatedAt: product.updatedAt
                })
            }
        }
    }
}