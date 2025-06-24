import { Injectable, NotFoundException } from "@nestjs/common";
import { ProductsRepository } from "src/Product/products.repository";
import { Category } from "@prisma/client";

interface EditProductServiceRequest {
  name: string;
  description?: string;
  price: number;
  inStock: number;
  isAvailable: boolean;
  category: Category;
  tags: string[];
  id: string;
}

@Injectable()
export class EditProductService {
  constructor(private productsRepository: ProductsRepository) {}

  async execute({
    name,
    description,
    price,
    inStock,
    isAvailable,
    category,
    tags,
    id,
  }: EditProductServiceRequest): Promise<void> {
    const product = await this.productsRepository.findById(id);

    if (!product) {
      throw new NotFoundException("Product not found");
    }

    product.name = name;
    product.description = description;
    product.price = price;
    product.inStock = inStock;
    product.isAvailable = isAvailable;
    product.category = category;
    product.tags = tags;

    await this.productsRepository.save(product);
  }
}