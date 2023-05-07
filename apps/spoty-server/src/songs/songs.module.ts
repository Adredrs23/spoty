import { Module } from '@nestjs/common';

import { SongsService } from './songs.service';
import { SongsResolver } from './songs.resolver';

@Module({
  providers: [SongsResolver, SongsService],
})
export class SongsModule {}
