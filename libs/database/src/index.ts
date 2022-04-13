import { PrismaClient } from '@prisma/client';
import { mockSong } from './lib/song';

const client = new PrismaClient();

(async () => {
  await mockSong(client);
})()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await client.$disconnect();
    process.exit(0);
  });
