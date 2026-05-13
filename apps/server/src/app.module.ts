import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfraModule } from './infra/infra/infra.module';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [InfraModule, CustomersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
