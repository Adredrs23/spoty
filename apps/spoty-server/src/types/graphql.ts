
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

export class CreateSongCreateNestedAlbumInput {
    name: string;
}

export class CreateSongInput {
    name: string;
    uploadedBy: string;
    ownedBy: string;
    isPrivate?: Nullable<boolean>;
    isSingle?: Nullable<boolean>;
    duration?: Nullable<number>;
    producedBy?: Nullable<string[]>;
    writtenBy?: Nullable<string[]>;
    album?: Nullable<CreateSongCreateNestedAlbumInput>;
}

export class UpdateSongInput {
    id: string;
    name?: Nullable<string>;
    duration?: Nullable<number>;
    producedBy?: Nullable<string[]>;
    writtenBy?: Nullable<string[]>;
    isSingle?: Nullable<boolean>;
    album?: Nullable<CreateSongCreateNestedAlbumInput>;
    uploadedOn?: Nullable<DateTime>;
    uploadedBy?: Nullable<string>;
    ownedBy?: Nullable<string>;
    isPrivate?: Nullable<boolean>;
}

export class CreateAlbumInput {
    name: string;
    songs?: Nullable<Nullable<CreateSongInput>[]>;
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
    id: string;
    name: string;
    duration: number;
    isSingle: boolean;
    uploadedOn: DateTime;
    uploadedBy: string;
    updatedAt: DateTime;
    ownedBy: string;
    isPrivate: boolean;
    producedBy?: Nullable<string[]>;
    writtenBy?: Nullable<string[]>;
    album?: Nullable<Album>;
    albumId?: Nullable<string>;
}

export class Album {
    id: string;
    name: string;
    songs?: Nullable<Nullable<Song>[]>;
}

export type JSON = any;
export type DateTime = any;
type Nullable<T> = T | null;
