import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";

interface Product {
    name: string,
    model: string,
    dateManufacture: string,
    year: string,
    brand: string,
    email: string,
    cpf: string
}

interface CreateProductServiceRequest {
    name: string,
    model: string,
    dateManufacture: string,
    year: string,
    brand: string,
    email: string,
    cpf: string
}

type CreateProductServiceResponse = {
    product: Product;
}

@Injectable()
export class CreateProductService{
    constructor(private prisma: PrismaService) {}

    async execute({
        brand,
        cpf,
        dateManufacture,
        email,
        model,
        name,
        year
    }: CreateProductServiceRequest): Promise<CreateProductServiceResponse> {
        return new Promise (() => {});
    }
}