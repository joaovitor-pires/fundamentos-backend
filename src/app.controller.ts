import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { z } from 'zod';
import { ZodValidationPipe } from './pipes/zod-validation-pipe';

const createProductBodySchema = z.object({
  name: z.string().min(3).max(20),
  model: z.string(),
  dateManufacture: z.string(),
  year: z.string(),
  brand: z.string().min(3).max(20),
  email: z.string().email(),
  cpf: z.string().regex(new RegExp("^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}"), "CPF Invalid.")
});

const bodyValidationPipe = new ZodValidationPipe(createProductBodySchema);

type createProductBodySchema= z.infer<typeof createProductBodySchema>;

@Controller('/products')
export class AppController {
  constructor() {}

  @Post()
  Create(@Body(bodyValidationPipe) body: any): string {
    return "create";
  }
}
