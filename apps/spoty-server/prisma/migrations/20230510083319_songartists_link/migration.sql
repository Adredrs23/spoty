-- CreateTable
CREATE TABLE "ArtistsSongs" (
    "songId" TEXT NOT NULL,
    "artistId" TEXT NOT NULL,

    CONSTRAINT "ArtistsSongs_pkey" PRIMARY KEY ("songId","artistId")
);

-- AddForeignKey
ALTER TABLE "ArtistsSongs" ADD CONSTRAINT "ArtistsSongs_songId_fkey" FOREIGN KEY ("songId") REFERENCES "Song"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArtistsSongs" ADD CONSTRAINT "ArtistsSongs_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Artist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
