import { db } from "@/lib/db";
import CardJembatan from "./cardJembatan";

export default async function ListJembatan() {



  const jembatan = await db.jembatan.findMany( {
    where : {
      published : false
    }
  })
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
              progress={data.progress}
              target={BigInt(data.target)}
              terkumpul={BigInt(data.terkumpul)}
              link={data.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}
