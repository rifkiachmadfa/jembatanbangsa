-- CreateTable
CREATE TABLE "Jembatan" (
    "id" TEXT NOT NULL,
    "judul" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Jembatan_pkey" PRIMARY KEY ("id")
);
