import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { isValidCPF } from "utils/is-valid-cpf";
import { ZodValidationPipe } from "./pipes/zod-validation-pipe";
import { z } from "zod";

const createProductBodySchema = z.object({
  name: z.string().min(3).max(20),
  model: z.string(),
  dateManufacture: z.string(),
  year: z.string(),
  brand: z.string().min(3).max(20),
  email: z.string().email(),
  cpf: z.string().regex(/^\d{11}$/, {
    message: 'CPF deve conter exatamente 11 dígitos numéricos',
  })
  .refine(isValidCPF, {
    message: "CPF Invalid",
  }),
});

const bodyValidationPipe = new ZodValidationPipe(createProductBodySchema);

type createProductBodySchema= z.infer<typeof createProductBodySchema>;

@Controller()
export class CreateProductController {
  constructor() {}

  @Post()
  @HttpCode(201)
  async handle(@Body(bodyValidationPipe) body: createProductBodySchema) {

  }
}       