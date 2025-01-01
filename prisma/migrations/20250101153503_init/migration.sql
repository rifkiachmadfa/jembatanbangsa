/*
  Warnings:

  - You are about to drop the `DataJembatan` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DataJembatan" DROP CONSTRAINT "DataJembatan_userId_fkey";

-- DropTable
DROP TABLE "DataJembatan";

-- DropEnum
DROP TYPE "JenisPengajuan";
