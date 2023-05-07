import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { SongsService } from './songs.service';

import { CreateSongInput, UpdateSongInput } from 'src/types/graphql';

@Resolver('Song')
export class SongsResolver {
  constructor(private readonly songsService: SongsService) {}

  @Query('songs')
  findAll() {
    return this.songsService.findAll();
  }

  @Query('song')
  findOne(@Args('id') id: string) {
    return this.songsService.findOne(id);
  }

  @Mutation('createSong')
  create(@Args('createSongInput') createSongInput: CreateSongInput) {
    return this.songsService.create(createSongInput);
  }

  @Mutation('updateSong')
  update(@Args('updateSongInput') updateSongInput: UpdateSongInput) {
    return this.songsService.update(updateSongInput.id, updateSongInput);
  }

  @Mutation('removeSong')
  remove(@Args('id') id: string) {
    return this.songsService.remove(id);
  }
}
