import { PrismaClient } from '@prisma/client';

export async function mockSong(prisma: PrismaClient) {
  await prisma.song.createMany({
    data: [
      {
        name: 'Fel My Rhythm',
      },
      {
        name: 'Still Life',
      },
      {
        name: 'LOVE DIVE',
      },
      {
        name: 'Melting',
      },
    ],
  });
}
