/*
  Warnings:

  - You are about to alter the column `target` on the `Jembatan` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `terkumpul` on the `Jembatan` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Jembatan" ALTER COLUMN "target" SET DATA TYPE INTEGER,
ALTER COLUMN "terkumpul" SET DATA TYPE INTEGER;
