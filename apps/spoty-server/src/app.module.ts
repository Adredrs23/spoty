import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { SongsModule } from './songs/songs.module';
import { PrismaModule } from './prisma/prisma.module';
import { ArtistsModule } from './artists/artists.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      path: '/grasshopper-effect',
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/types/graphql.ts'),
        outputAs: 'class',
      },
    }),
    SongsModule,
    ArtistsModule,
    PrismaModule,
  ],
})
export class AppModule {}
