import { Module } from '@nestjs/common';
import { CreateProductController } from './Products/create-product.controller';
import { PrismaService } from './prisma.service';
import { CreateProductService } from './Products/create-product.service';
import { ProductsRepository } from './Products/products.repository';
import { CreateModelController } from './Models/create-model.controller';
import { DeleteModelController } from './Models/delete-model.controller';
import { DeleteProductController } from './Products/delete-product.controller';
import { EditModelController } from './Models/edit-model.controller';
import { EditProductController } from './Products/edit-product.controller';
import { FetchRecentModelsController } from './Models/fetch-recent-models.controller';
import { FetchRecentProductsController } from './Products/fetch-recent-products.controller';
import { GetProductByIdController } from './Products/get-product-by-id.controller';
import { GetModelByIdController } from './Models/get-model-by-id.controller';
import { UpdateAvailableProductController } from './Products/update-available-product.controller';
import { CreateModelService } from './Models/create-model.service';
import { DeleteModelService } from './Models/delete-model.service';
import { DeleteProductService } from './Products/delete-product.service';
import { EditModelService } from './Models/edit-model.service';
import { EditProductService } from './Products/edit-product.service';
import { FetchRecentModelsService } from './Models/fetch-recent-models.service';
import { FetchRecentProductsService } from './Products/fetch-recent-products.service';
import { GetProductByIdService } from './Products/get-product-by-id.service';
import { GetModelByIdService } from './Models/get-model-by-id.service';
import { UpdateAvailableProductService } from './Products/update-available-product.service';
import { ModelsRepository } from './Models/models.repository';
import { CreateUserController } from './Users/create-user.controller';
import { GetUserByIdController } from './Users/get-user-by-id.controller';
import { CreateUserService } from './Users/create-user.service';
import { GetUserByIdService } from './Users/get-user-by-id.service';
import { UsersRepository } from './Users/users.repository';
import { FetchRecentUsersController } from './Users/fetch-recent-users.controller';
import { FetchRecentUsersService } from './Users/fetch-recent-users.service';

@Module({
  imports: [],
  controllers: [CreateProductController, CreateModelController, DeleteModelController, DeleteProductController, EditModelController, EditProductController, FetchRecentModelsController, FetchRecentProductsController, GetProductByIdController, GetModelByIdController, UpdateAvailableProductController, CreateUserController, GetUserByIdController, FetchRecentUsersController],
  providers: [PrismaService, CreateProductService, CreateModelService, DeleteModelService, DeleteProductService, EditModelService, EditProductService, FetchRecentModelsService, FetchRecentProductsService, GetProductByIdService, GetModelByIdService, UpdateAvailableProductService, ProductsRepository, ModelsRepository, UsersRepository, CreateUserService, GetUserByIdService, FetchRecentUsersService],
})
export class AppModule {}
