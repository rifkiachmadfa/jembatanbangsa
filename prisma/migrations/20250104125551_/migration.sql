/*
  Warnings:

  - Added the required column `userId` to the `Jembatan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Jembatan" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Jembatan" ADD CONSTRAINT "Jembatan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
