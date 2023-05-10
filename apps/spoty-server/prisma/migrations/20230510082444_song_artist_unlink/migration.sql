/*
  Warnings:

  - You are about to drop the column `artistId` on the `Song` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Song" DROP CONSTRAINT "Song_artistId_fkey";

-- AlterTable
ALTER TABLE "Song" DROP COLUMN "artistId";
