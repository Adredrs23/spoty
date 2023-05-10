/*
  Warnings:

  - You are about to alter the column `name` on the `Artist` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `name` on the `Song` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - A unique constraint covering the columns `[name]` on the table `Artist` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Song` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[albumId]` on the table `Song` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Artist" ALTER COLUMN "name" SET DATA TYPE VARCHAR(100);

-- AlterTable
ALTER TABLE "Song" ADD COLUMN     "albumId" TEXT,
ADD COLUMN     "duration" TEXT,
ADD COLUMN     "isPrivate" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isSingle" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "ownedBy" TEXT,
ADD COLUMN     "producedBy" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "uploadedBy" TEXT,
ADD COLUMN     "uploadedOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "writtenBy" TEXT[] DEFAULT ARRAY[]::TEXT[],
ALTER COLUMN "name" SET DATA TYPE VARCHAR(100);

-- CreateTable
CREATE TABLE "Album" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "Album_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Album_name_key" ON "Album"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Artist_name_key" ON "Artist"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Song_name_key" ON "Song"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Song_albumId_key" ON "Song"("albumId");

-- AddForeignKey
ALTER TABLE "Song" ADD CONSTRAINT "Song_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album"("id") ON DELETE SET NULL ON UPDATE CASCADE;
