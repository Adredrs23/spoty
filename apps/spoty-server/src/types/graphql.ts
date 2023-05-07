
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateSongInput {
    name: string;
}

export class UpdateSongInput {
    id: string;
    name: string;
}

export class Song {
    name?: Nullable<string>;
}

export abstract class IQuery {
    abstract songs(): Nullable<Song>[] | Promise<Nullable<Song>[]>;

    abstract song(id: string): Nullable<Song> | Promise<Nullable<Song>>;
}

export abstract class IMutation {
    abstract createSong(createSongInput: CreateSongInput): Song | Promise<Song>;

    abstract updateSong(updateSongInput: UpdateSongInput): Song | Promise<Song>;

    abstract removeSong(id: string): Nullable<Song> | Promise<Nullable<Song>>;
}

type Nullable<T> = T | null;
