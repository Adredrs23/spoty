import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSongInput, UpdateSongInput } from 'src/types/graphql';

@Injectable()
export class SongsService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.song.findMany({
      include: {
        album: { include: { songs: true } },
      },
    });
  }

  findOne(id: string) {
    return this.prisma.song.findUnique({
      where: { id },
      include: {
        album: { include: { songs: true } },
      },
    });
  }

  create({
    name,
    uploadedBy,
    ownedBy,
    isPrivate,
    isSingle,
    duration,
    producedBy,
    writtenBy,
    album,
  }: CreateSongInput) {
    return this.prisma.song.create({
      data: {
        isPrivate,
        isSingle,
        name,
        producedBy,
        writtenBy,
        duration,
        ownedBy,
        uploadedBy,
        ...(album
          ? {
              album: {
                create: {
                  name: album.name,
                },
              },
            }
          : {}),
      },
      include: {
        album: { include: { songs: true } },
      },
    });
  }

  update(id: string, updateSongInput: UpdateSongInput) {
    const {
      isPrivate,
      isSingle,
      name,
      producedBy,
      writtenBy,
      duration,
      ownedBy,
      uploadedBy,
      album,
    } = updateSongInput;
    return this.prisma.song.update({
      where: {
        id: id,
      },
      data: {
        isPrivate,
        isSingle,
        name,
        producedBy,
        writtenBy,
        duration,
        ownedBy,
        uploadedBy,
        ...(album
          ? {
              album: {
                update: {
                  name: album.name,
                },
              },
            }
          : {}),
      },
      include: {
        album: { include: { songs: true } },
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
