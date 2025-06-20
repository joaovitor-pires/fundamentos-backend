import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { Prisma } from "@prisma/client";

@Injectable()
export class UsersRepository {
    constructor(private prisma: PrismaService) {}

    async findById(id: string): Promise<Prisma.UserUncheckedCreateInput | null> {
        return this.prisma.user.findUnique({
            where: {
            id,
            },
        });
    }

    async findByEmail(email: string): Promise<Prisma.UserUncheckedCreateInput | null> {
        return this.prisma.user.findUnique({
            where: {
            email,
            },
        });
    }

    async create(data: Prisma.UserUncheckedCreateInput): Promise<void> {
        await this.prisma.user.create({
            data,
        });
    }
}
