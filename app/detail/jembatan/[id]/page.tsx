import { db } from "@/lib/db";
import React from "react";
import { notFound } from "next/navigation"; // Gunakan untuk menangani halaman tidak ditemukan
import Image from "next/image";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Progress } from "@/components/ui/progress";
import TabelSpesifikasi from "@/components/tabelSpesifikasi";
import { Button } from "@/components/ui/button";
type tParams = Promise<{ id: string[] }>;
const JembatanPage = async ({ params }: { params: tParams }) => {
  const { id } = await params;
  const idString = String(id);
  if (!idString) {
    // Tangani kasus di mana id tidak ada
    notFound(); // Mengarahkan ke halaman 404 Next.js
  }
  // Ambil data dari database
  const data = await db.jembatan.findUnique({
    where: {
      id: idString,
    },
    include: {
      user: true,
    },
  });

  if (!data) {
    // Tangani kasus di mana data tidak ditemukan
    notFound();
  }

  const progress = (data.terkumpul * 100) / data.target;

  return (
    <>
      <div className="flex justify-center">
        <div className="w-[800px] border-2 rounded-xl shadow">
          <div className="w-full mb-10">
            <AspectRatio ratio={16 / 9}>
              <Image
                alt={data.id}
                src={data.image}
                width={0}
                height={0}
                className="w-full h-full"
              />
            </AspectRatio>
          </div>
          <div className="m-8  ">
            <div className="m-2 mb-10">
              <h1 className="text-3xl  text-center pt-2 ">{data.judul}</h1>
              <p className="text-center">{data.alamat}</p>
              <Progress className="mt-4" value={progress} />
              <div className="flex justify-between">
                <p className="text-gray-800">terkumpul Rp {data.terkumpul}</p>
                <p className="text-gray-800">kebutuhan Rp {data.target}</p>
              </div>
              <p className="text-gray-800 mt-4">
                diajukan oleh {data.user.username}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <div className=" w-[800px] shadow-xl border-2 rounded-xl">
          <div className="m-4">
            <h3 className="text-xl mb-4">Deskripsi</h3>
            <p>{data.content}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <div className=" w-[800px] shadow-xl border-2 rounded-xl">
          <div className="m-4">
            <div className="mt-2">
              <h3 className="pt-2 text-xl">spesifikasi</h3>
              <TabelSpesifikasi
                penerimaManfaat={data.penerimaManfaat}
                panjangJembatan={data.panjangBentangan}
                panjangBibir={data.panjangBibir}
                tahunPembuatan={data.tahunPembuatan}
                panjangGapuraAnchorBelakang={data.panjangGapuraAnchorBelakang}
                boxGapura={data.boxGapura}
                jenisPembangunan={data.jenisPembangunan}
                panjangPapanPijak={data.panjangPapanPijak}
                panjangBoxAnchorBelakang={data.panjangBoxAnchorBelakang}
                lebarGapuraAs={data.lebarGapuraAs}
                tinggiGapura={data.tinggiGapura}
                jenisBesi={data.jenisBesiTiang}
              />
            </div>
          </div>
          <div className="gap-4 flex m-10">
            <Button variant="secondary" className="w-full">
              Hubungi Kami
            </Button>
            <Button className="w-full">Donasi</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JembatanPage;
