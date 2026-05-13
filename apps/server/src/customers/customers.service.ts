import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/infra/infra/prisma/prisma.service';


export interface CreateCustomerDto {
  name: string;
  email: string;
  metadata?: Record<string, unknown>;
}

@Injectable()
export class CustomersService {
  constructor(private readonly prismaService: PrismaService) {}

  findAll() {
    return this.prisma.customer.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: string) {
    const customer = await this.prisma.customer.findUnique({
      where: { id },
    });

    if (!customer) {
      throw new NotFoundException(`Customer ${id} not found`);
    }

    return customer;
  }

  create(dto: CreateCustomerDto) {
    return this.prisma.customer.create({
      data: {
        name: dto.name,
        email: dto.email,
        metadata: dto.metadata ?? {},
      },
    });
  }

  async update(id: string, dto: Partial<CreateCustomerDto>) {
    await this.findOne(id);

    return this.prisma.customer.update({
      where: { id },
      data: {
        ...(dto.name !== undefined && { name: dto.name }),
        ...(dto.email !== undefined && { email: dto.email }),
        ...(dto.metadata !== undefined && { metadata: dto.metadata }),
      },
    });
  }
}