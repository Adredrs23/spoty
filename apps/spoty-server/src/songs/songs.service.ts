import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { CreateSongInput, UpdateSongInput } from 'src/types/graphql';

@Injectable()
export class SongsService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.song.findMany();
  }

  findOne(id: string) {
    return this.prisma.song.findUnique({
      where: { id: id },
      select: {
        name: true,
        id: true,
      },
    });
  }

  create({ name }: CreateSongInput) {
    return this.prisma.song.create({
      data: { name },
    });
  }

  update(id: string, { name }: UpdateSongInput) {
    return this.prisma.song.update({
      where: {
        id: id,
      },
      data: {
        name,
      },
    });
  }

  remove(id: string) {
    return this.prisma.song.delete({
      where: {
        id: id,
      },
    });
  }
}
