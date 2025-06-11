import { Module } from '@nestjs/common';
import { CreateProductController } from './create-product.controller';
import { PrismaService } from './prisma.service';
import { CreateProductService } from './create-product.service';
import { ProductsRepository } from './products.repository';
import { EditProductController } from './edit-product.controller';
import { DeleteProductController } from './delete-product.controller';
import { FetchRecentProductsController } from './fetch-recent-products.controller';
import { GetProductByIdController } from './get-product-by-id.controller';
import { EditProductService } from './edit-product.service';
import { DeleteProductService } from './delete-product.service';
import { FetchRecentProductsService } from './fetch-recent-products.service';
import { GetProductByIdService } from './get-product-by-id.service';
import { CreateModelController } from './create-model.controller';
import { CreateModelService } from './create-model.service';
import { DeleteModelController } from './delete-model.controller';
import { DeleteModelService } from './delete-model.service';
import { EditModelController } from './edit-model.controller';
import { EditModelService } from './edit-model.service';
import { UpdateAvailableProductController } from './update-available-product.controller';
import { FetchRecentModelsController } from './fetch-recent-models.controller';
import { GetModelByIdController } from './get-model-by-id.controller';
import { ModelsRepository } from './models.repository';
import { UpdateAvailableProductService } from './update-available-product.service';
import { FetchRecentModelsService } from './fetch-recent-models.service';
import { GetModelByIdService } from './get-model-by-id.service';

@Module({
  imports: [],
  controllers: [CreateProductController, DeleteProductController, EditProductController, FetchRecentProductsController, GetProductByIdController, UpdateAvailableProductController, CreateModelController, DeleteModelController, EditModelController, FetchRecentModelsController, GetModelByIdController],
  providers: [PrismaService, CreateProductService, DeleteProductService, EditProductService, FetchRecentProductsService, GetProductByIdService, UpdateAvailableProductService, ProductsRepository, CreateModelService, DeleteModelService, EditModelService, FetchRecentModelsService, GetModelByIdService, ModelsRepository],
})
export class AppModule {}
