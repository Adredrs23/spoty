-- CreateTable
CREATE TABLE "Genre" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "albumId" TEXT,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Genre_name_key" ON "Genre"("name");

-- AddForeignKey
ALTER TABLE "Genre" ADD CONSTRAINT "Genre_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album"("id") ON DELETE SET NULL ON UPDATE CASCADE;
