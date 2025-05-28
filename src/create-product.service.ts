import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { ProductsRepository } from "./products.repository";
import { Category } from "@prisma/client";

export interface Product {
    id: string;
    name: string;
    description?: string;
    price: number;
    balance: number;
    isAvailable: Boolean;
    category: Category;
    tags: string[];
    createdAt: string | Date | undefined;
    updatedAt: string | Date | undefined | null;
}

interface CreateProductServiceRequest {
  name: string;
  description?: string;
  price: number;
  balance: number;
  isAvailable: boolean;
  category: Category;
  tags: string[];
}

type CreateProductServiceResponse = {
    product: Product;
}

@Injectable()
export class CreateProductService{
    constructor(private ProductsRepository: ProductsRepository) {}

    async execute({
        name,
        description,
        price,
        balance,
        isAvailable,
        category,
        tags,
    }: CreateProductServiceRequest): Promise<CreateProductServiceResponse> {
        const productWithSameName = await this.ProductsRepository.findByName(name);

        if (productWithSameName) {
            throw new Error("Product already exists")
        }

        const product = {
            name,
            description,
            price,
            balance,
            isAvailable,
            category,
            tags,
        };

        const newProduct = await this.ProductsRepository.create(product);

        return {
            product: {
                id: newProduct.id?.toString() || "",
                name,
                description,
                price,
                balance,
                isAvailable,
                category,
                tags,
                createdAt: newProduct.createdAt,
                updatedAt: newProduct.updatedAt
            }
        };
    }
}