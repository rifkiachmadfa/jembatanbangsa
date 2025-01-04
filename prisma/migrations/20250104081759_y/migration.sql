/*
  Warnings:

  - Added the required column `pengajuId` to the `Jembatan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Jembatan" ADD COLUMN     "pengajuId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Jembatan" ADD CONSTRAINT "Jembatan_pengajuId_fkey" FOREIGN KEY ("pengajuId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
