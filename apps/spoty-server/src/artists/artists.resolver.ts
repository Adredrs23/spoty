import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { ArtistsService } from './artists.service';

import { CreateArtistInput, UpdateArtistInput } from 'src/types/graphql';

@Resolver('Artist')
export class ArtistsResolver {
  constructor(private readonly artistsService: ArtistsService) {}

  @Query('artists')
  findAll() {
    return this.artistsService.findAll();
  }

  @Query('artist')
  findOne(@Args('id') id: string) {
    return this.artistsService.findOne(id);
  }

  @Mutation('createArtist')
  create(@Args('createArtistInput') createArtistInput: CreateArtistInput) {
    return this.artistsService.create(createArtistInput);
  }

  @Mutation('updateArtist')
  update(@Args('updateArtistInput') updateArtistInput: UpdateArtistInput) {
    return this.artistsService.update(updateArtistInput.id, updateArtistInput);
  }

  @Mutation('removeArtist')
  remove(@Args('id') id: string) {
    return this.artistsService.remove(id);
  }
}
