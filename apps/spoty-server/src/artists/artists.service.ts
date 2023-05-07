import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { CreateArtistInput, UpdateArtistInput } from 'src/types/graphql';

@Injectable()
export class ArtistsService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.artist.findMany();
  }

  findOne(id: string) {
    return this.prisma.artist.findUnique({
      where: { id: id },
      select: {
        name: true,
        id: true,
      },
    });
  }

  create({ name }: CreateArtistInput) {
    return this.prisma.artist.create({
      data: { name },
    });
  }

  update(id: string, { name }: UpdateArtistInput) {
    return this.prisma.artist.update({
      where: {
        id: id,
      },
      data: {
        name,
      },
    });
  }

  remove(id: string) {
    return this.prisma.artist.delete({
      where: {
        id: id,
      },
    });
  }
}
