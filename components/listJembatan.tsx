import { bigint } from "zod";
import CardJembatan from "./cardJembatan";
import { link } from "fs";

export default async function ListJembatan() {
  const jembatan = [
    {
      id: 1,
      namaJembatan: "Jembatan Pelangi",
      deskripsi: "Menghubungkan Desa A dan B",
      gambar: "/images/jembatan1.jpg",
      progress: 60,
      target: BigInt(100000000),
      terkumpul: BigInt(60000000),
      link: "248923348029111",
    },
    {
      id: 2,
      namaJembatan: "Jembatan Harapan",
      deskripsi: "Melintasi Sungai C",
      gambar: "/images/jembatan2.jpg",
      progress: 85,
      target: BigInt(80000000),
      terkumpul: BigInt(68000000),
      link: "248923348029",
    },
    // Tambahkan lebih banyak objek untuk jembatan lainnya
  ];
  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-4">
          {jembatan.map((data) => (
            <CardJembatan
              key={data.id}
              namaJembatan={data.namaJembatan}
              deskripsi={data.deskripsi}
              gambar={data.gambar}
              progress={data.progress}
              target={data.target}
              terkumpul={data.terkumpul}
              id={data.link}
              link={data.link}
            />
          ))}
        </div>
      </div>
    </>
  );
}
