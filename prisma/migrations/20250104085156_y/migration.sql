/*
  Warnings:

  - You are about to drop the column `pengajuId` on the `Jembatan` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Jembatan" DROP CONSTRAINT "Jembatan_pengajuId_fkey";

-- AlterTable
ALTER TABLE "Jembatan" DROP COLUMN "pengajuId";
