import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UtilsPrismaModule } from '@juju-nx-workspace/utils/prisma';

@Module({
  imports: [UtilsPrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
