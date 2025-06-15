import { Injectable } from "@nestjs/common";
import { ModelsRepository } from "src/Models/models.repository";

interface CreateModelServiceRequest {
  name: string;
}

@Injectable()
export class CreateModelService {
  constructor(private modelsRepository: ModelsRepository) {}

  async execute({
    name,
  }: CreateModelServiceRequest): Promise<void> {
    await this.modelsRepository.create({ name });
  }
}