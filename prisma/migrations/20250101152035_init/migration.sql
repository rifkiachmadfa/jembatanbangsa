/*
  Warnings:

  - You are about to drop the `Datajembatan` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Datajembatan" DROP CONSTRAINT "Datajembatan_userId_fkey";

-- DropTable
DROP TABLE "Datajembatan";

-- CreateTable
CREATE TABLE "Data" (
    "id" SERIAL NOT NULL,
    "namaJembatan" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "panjangBentangan" DOUBLE PRECISION NOT NULL,
    "jenisPengajuan" "JenisPengajuan" NOT NULL DEFAULT 'PEMBANGUNAN_TOTAL',
    "tahunPembuatan" INTEGER NOT NULL,
    "penerimaManfaat" TEXT NOT NULL,
    "panjangBibirJembatan" DOUBLE PRECISION NOT NULL,
    "biayaPembangunan" DOUBLE PRECISION NOT NULL,
    "gambarDepan" TEXT NOT NULL,
    "gambarBelakang" TEXT NOT NULL,
    "gambarSisiA" TEXT NOT NULL,
    "gambarSisiB" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "panjangPapanPijak" DOUBLE PRECISION,
    "lebarGapuraDalam" DOUBLE PRECISION,
    "jenisBesiTiang" TEXT,
    "boxGapura" TEXT,
    "panjangBoxAnchorBelakang" DOUBLE PRECISION,
    "tinggiGapura" DOUBLE PRECISION,
    "userId" INTEGER,

    CONSTRAINT "Data_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Data" ADD CONSTRAINT "Data_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
