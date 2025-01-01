/*
  Warnings:

  - Added the required column `image` to the `Jembatan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `progress` to the `Jembatan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `target` to the `Jembatan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `terkumpul` to the `Jembatan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Jembatan" ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "progress" INTEGER NOT NULL,
ADD COLUMN     "target" BIGINT NOT NULL,
ADD COLUMN     "terkumpul" BIGINT NOT NULL;
