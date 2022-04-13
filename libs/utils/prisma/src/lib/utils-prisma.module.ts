import { Module, Global } from '@nestjs/common';
import { UtilsPrismaService } from './utils-prisma.service';

@Global()
@Module({
  controllers: [],
  providers: [UtilsPrismaService],
  exports: [UtilsPrismaService],
})
export class UtilsPrismaModule {}
