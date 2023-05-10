/*
  Warnings:

  - The `duration` column on the `Song` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Made the column `ownedBy` on table `Song` required. This step will fail if there are existing NULL values in that column.
  - Made the column `uploadedBy` on table `Song` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Song" DROP COLUMN "duration",
ADD COLUMN     "duration" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "ownedBy" SET NOT NULL,
ALTER COLUMN "uploadedBy" SET NOT NULL;
