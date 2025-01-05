/*
  Warnings:

  - Added the required column `panjangBentangan` to the `Jembatan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `panjangBibir` to the `Jembatan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `penerimaManfaat` to the `Jembatan` table without a default value. This is not possible if the table is not empty.
  - Made the column `progress` on table `Jembatan` required. This step will fail if there are existing NULL values in that column.
  - Made the column `terkumpul` on table `Jembatan` required. This step will fail if there are existing NULL values in that column.
  - Made the column `target` on table `Jembatan` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "JenisPembangunan" AS ENUM ('fullPembangunan', 'renovasi');

-- AlterTable
ALTER TABLE "Jembatan" ADD COLUMN     "boxGapura" DOUBLE PRECISION,
ADD COLUMN     "jenisBesiTiang" TEXT,
ADD COLUMN     "jenisPembangunan" "JenisPembangunan" NOT NULL DEFAULT 'fullPembangunan',
ADD COLUMN     "lebarGapuraAs" DOUBLE PRECISION,
ADD COLUMN     "lebarGapuraDalam" DOUBLE PRECISION,
ADD COLUMN     "panjangBentangan" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "panjangBibir" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "panjangBoxAnchorBelakang" DOUBLE PRECISION,
ADD COLUMN     "panjangGapuraAnchorBelakang" DOUBLE PRECISION,
ADD COLUMN     "panjangPapanPijak" DOUBLE PRECISION,
ADD COLUMN     "penerimaManfaat" INTEGER NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'Butuh Pendanaan',
ADD COLUMN     "tahunPembuatan" TIMESTAMP(3),
ADD COLUMN     "tinggiGapura" DOUBLE PRECISION,
ALTER COLUMN "progress" SET NOT NULL,
ALTER COLUMN "progress" SET DEFAULT 0,
ALTER COLUMN "terkumpul" SET NOT NULL,
ALTER COLUMN "terkumpul" SET DEFAULT 0,
ALTER COLUMN "target" SET NOT NULL,
ALTER COLUMN "target" SET DEFAULT 0;
