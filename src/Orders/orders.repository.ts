import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class OrdersRepository {
    constructor(private prisma: PrismaService) {}

    async findById(id: string) {
        return await this.prisma.order.findUnique({
            where: { id },
            include: {
                orderItems: {
                    include: {
                        product: true,
                    },
                },
            },
        });
    }
}
