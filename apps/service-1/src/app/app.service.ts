import { Injectable } from '@nestjs/common';
import { UtilsPrismaService } from '@juju-nx-workspace/utils/prisma';
import { Game } from '@juju-nx-workspace/enum';

@Injectable()
export class AppService {
  constructor(private prisma: UtilsPrismaService) {}

  async getData() {
    console.log('BEST GAME -> ', Game.VALO);
    return await this.prisma.song.findMany();
  }
}
