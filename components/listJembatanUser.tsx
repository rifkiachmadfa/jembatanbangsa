import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth"; // Pastikan path authOptions benar
import CardJembatan from "./cardJembatan";

export default async function ListJembatanUser() {
  // Ambil sesi pengguna yang aktif
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    // Jika tidak ada sesi, minta login
    return <p className="text-center">Silakan login untuk melihat data jembatan Anda.</p>;
  }

  // Ambil data jembatan berdasarkan email pengguna
  const user = await db.user.findUnique({
    where: {
      email: session.user.email,
    },
    include: {
      jembatan: true, // Relasi ke tabel jembatan
    },
  });

  // Jika pengguna tidak memiliki jembatan, tampilkan pesan
  if (!user?.jembatan?.length) {
    return <p className="text-center">Anda belum memiliki data jembatan.</p>;
  }

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-4 gap-4">
        {user.jembatan.map((data) => (
          <CardJembatan
            key={data.id}
            namaJembatan={data.judul}
            deskripsi={data.alamat}
            gambar={data.image}
            progress={data.progress}
            target={BigInt(data.target)}
            terkumpul={BigInt(data.terkumpul)}
            link={data.id}
          />
        ))}
      </div>
    </div>
  );
}
