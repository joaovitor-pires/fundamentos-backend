import { Controller, Get } from "@nestjs/common";
import { FetchRecentModelsService } from "src/Models/fetch-recent-models.service";

@Controller('/models')
export class FetchRecentModelsController {
  constructor(private fetchRecentModels: FetchRecentModelsService) {}

  @Get()
  async handle() {
    const models = await this.fetchRecentModels.execute();

    return {
      models
    };
  }
}