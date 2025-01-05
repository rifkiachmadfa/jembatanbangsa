import { db } from "@/lib/db";
import CardJembatan from "./cardJembatan";

export default async function ListJembatan() {
  const jembatan = await db.jembatan.findMany({
    include: {
      user: true,
    },
  });
  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-4">
          {jembatan.map((data) => (
            <CardJembatan
              key={data.id}
              namaJembatan={data.judul}
              deskripsi={data.alamat}
              gambar={data.image}
              target={data.target}
              terkumpul={data.terkumpul}
              link={data.id}
              user={data.user.username}
            />
          ))}
        </div>
      </div>
    </>
  );
}
