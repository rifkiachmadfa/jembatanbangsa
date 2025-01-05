/*
  Warnings:

  - The `tahunPembuatan` column on the `Jembatan` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Jembatan" DROP COLUMN "tahunPembuatan",
ADD COLUMN     "tahunPembuatan" INTEGER;
