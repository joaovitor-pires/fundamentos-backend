import { Controller, Get, HttpCode, NotFoundException, Param } from "@nestjs/common";
import { GetProductByIdService } from "src/Products/get-product-by-id.service";

@Controller('/products/:id')
export class GetProductByIdController {
  constructor(private getProductByIdService: GetProductByIdService) {}

  @Get()
  @HttpCode(200)
  async handle(@Param("id") id: string) {
    const product = await this.getProductByIdService.execute({
      id,
    });

    return {
      product
    };
  }
}