import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLJSON, GraphQLDateTime } from 'graphql-scalars';
import { ConfigModule } from '@nestjs/config';

import { SongsModule } from './songs/songs.module';
import { PrismaModule } from './prisma/prisma.module';
import { ArtistsModule } from './artists/artists.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      path: '/grasshopper-effect',
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/types/graphql.ts'),
        outputAs: 'class',
      },
      resolvers: { JSON: GraphQLJSON, Date: GraphQLDateTime },
    }),
    SongsModule,
    ArtistsModule,
    PrismaModule,
  ],
})
export class AppModule {}
