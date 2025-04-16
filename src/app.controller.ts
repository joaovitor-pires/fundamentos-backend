import { Body, Controller, Get, HttpCode, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { z } from 'zod';
import { ZodValidationPipe } from './pipes/zod-validation-pipe';

function isValidCPF(cpf: string): boolean {
  cpf = cpf.replace(/[^\d]+/g, '');

  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

  let sum = 0;
  for (let i = 0; i < 9; i++) sum += +cpf.charAt(i) * (10 - i);
  let rev = 11 - (sum % 11);
  if (rev === 10 || rev === 11) rev = 0;
  if (rev !== +cpf.charAt(9)) return false;

  sum = 0;
  for (let i = 0; i < 10; i++) sum += +cpf.charAt(i) * (11 - i);
  rev = 11 - (sum % 11);
  if (rev === 10 || rev === 11) rev = 0;
  return rev === +cpf.charAt(10);
}

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

const updateProductBodySchema = z.object({
  name: z.string().min(3).max(20).optional(),
  model: z.string().optional(),
  dateManufacture: z.string().optional(),
  year: z.string().optional(),
  brand: z.string().min(3).max(20).optional(),
  email: z.string().email().optional(),
  cpf: z.string().regex(/^\d{11}$/, {
    message: 'CPF deve conter exatamente 11 dígitos numéricos',
  })
  .refine(isValidCPF, {
    message: "CPF Invalid",
  }).optional(),
});

const updateBodyValidationPipe = new ZodValidationPipe(updateProductBodySchema);

type updateProductBodySchema= z.infer<typeof updateProductBodySchema>;

@Controller('/products')
export class AppController {
  constructor() {}

  @Post()
  @HttpCode(201)
  Create(@Body(bodyValidationPipe) body: createProductBodySchema) {
    const { brand, dateManufacture, cpf, email, model, name, year } = body

    // Executar o service com a regra de negócio
  }

  @Get()
  @HttpCode(202)
  findAll() {

  }

  @Get(':id')
  @HttpCode(203)
  findById(@Param('id') id: string) {

  }

  @Put()
  @HttpCode(204)
  update(@Body(updateProductBodySchema) body: updateProductBodySchema) {
    const { brand, dateManufacture, cpf, email, model, name, year } = body; 

  }

  @Patch(':id')
  @HttpCode(205)
  updateStatus(@Param('id') id: string) {

  }
}
