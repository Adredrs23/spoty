import { Injectable } from '@nestjs/common';
import { storage } from 'firebase-admin';
import { join } from 'path';

import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSongInput, UpdateSongInput } from 'src/types/graphql';

@Injectable()
export class SongsService {
  constructor(private prisma: PrismaService) {}

  downloadFile() {
    const bucketName = 'spoty-b14a6.appspot.com';
    const destFileName = join(process.cwd(), 'public/files/downloaded.png');

    const fileName = 'vite-react-thumbnail.png';
    const options = {
      destination: destFileName,
    };

    // Downloads the file
    storage().bucket(bucketName).file(fileName).download(options);

    const res = `gs://${bucketName}/${fileName} downloaded to ${destFileName}.`;
    console.log(res);

    return res;
  }

  uploadFile() {
    const bucketName = 'spoty-b14a6.appspot.com';
    const filePath = join(process.cwd(), 'public/files/uploadable.jpg');

    const destFileName = 'uploaded.jpg';
    const options = {
      destination: destFileName,
    };

    storage().bucket(bucketName).upload(filePath, options);
    // Downloads the file

    const res = `gs://${bucketName}/${filePath} uploaded to ${destFileName}.`;
    console.log(res);

    return res;
  }

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
