
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateArtistInput {
    name: string;
}

export class UpdateArtistInput {
    id: string;
    name: string;
}

export class CreateSongInput {
    name: string;
}

export class UpdateSongInput {
    id: string;
    name: string;
}

export class Artist {
    name?: Nullable<string>;
}

export abstract class IQuery {
    abstract artists(): Nullable<Artist>[] | Promise<Nullable<Artist>[]>;

    abstract artist(id: string): Nullable<Artist> | Promise<Nullable<Artist>>;

    abstract songs(): Nullable<Song>[] | Promise<Nullable<Song>[]>;

    abstract song(id: string): Nullable<Song> | Promise<Nullable<Song>>;
}

export abstract class IMutation {
    abstract createArtist(createArtistInput: CreateArtistInput): Artist | Promise<Artist>;

    abstract updateArtist(updateArtistInput: UpdateArtistInput): Artist | Promise<Artist>;

    abstract removeArtist(id: string): Nullable<Artist> | Promise<Nullable<Artist>>;

    abstract createSong(createSongInput: CreateSongInput): Song | Promise<Song>;

    abstract updateSong(updateSongInput: UpdateSongInput): Song | Promise<Song>;

    abstract removeSong(id: string): Nullable<Song> | Promise<Nullable<Song>>;
}

export class Song {
    name?: Nullable<string>;
}

type Nullable<T> = T | null;
