import { db } from "@/lib/db"; 
import React from "react"; 
import { notFound } from "next/navigation"; // Gunakan untuk menangani halaman tidak ditemukan

interface Params {
  id: string | string[] | undefined; // Tipe default dari Next.js
}

const JembatanPage = async ({ params }: { params: Params }) => {
  // Validasi dan konversi id ke string
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  if (!id) {
    // Tangani kasus di mana id tidak ada
    notFound(); // Mengarahkan ke halaman 404 Next.js
  }

  // Ambil data dari database
  const data = await db.jembatan.findUnique({
    where: { id },
  });

  if (!data) {
    // Tangani kasus di mana data tidak ditemukan
    notFound();
  }

  return (
    <div>
      <h1>{data.judul}</h1>
      <p>{data.content}</p>
    </div>
  );
};

export default JembatanPage;
