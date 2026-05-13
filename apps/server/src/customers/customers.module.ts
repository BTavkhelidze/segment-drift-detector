import { Module } from '@nestjs/common';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';
import { InfraModule } from 'src/infra/infra/infra.module';
import { PrismaModule } from 'src/infra/infra/prisma/prisma.module';


@Module({
  imports: [PrismaModule],
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule {}