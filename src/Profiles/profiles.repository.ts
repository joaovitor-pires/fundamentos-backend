import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { Prisma } from "@prisma/client";

@Injectable()
export class ProfilesRepository {
    constructor(private prisma: PrismaService) {}

    async findByIdWithUser(id: string) {
        return await this.prisma.profile.findUnique({
            where: { id },
            include: {
            user: true,
            },
        });
    }

    async findByUserId(userId: string): Promise<Prisma.ProfileUncheckedCreateInput | null> {
        return await this.prisma.profile.findUnique({
            where: { userId },
        });
    }

    async create(data: Prisma.ProfileUncheckedCreateInput): Promise<void> {
        await this.prisma.profile.create({
            data,
        });
    }
}