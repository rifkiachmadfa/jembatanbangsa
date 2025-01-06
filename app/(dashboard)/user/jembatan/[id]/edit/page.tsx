import EditForm from "@/components/form/editForm";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

interface params {
  params: {
    id: string;
  };
}

export default async function pageEdit({ params }: params) {
  const getUser = await getServerSession(authOptions);
  const { id } = await params;
  const data = await db.jembatan.findUnique({
    where: {
      id: id,
    },
    include: {
      user: true,
    },
  });

  if (getUser?.user.email !== data?.user.email) {
    redirect("/notAuthorized");
  }

  if (!data) {
    return <h1>tidak ada data</h1>;
  }

  return (
    <>
      <EditForm
        namaJembatan={data.judul}
        alamat={data.alamat}
        penerimaManfaat={data.penerimaManfaat}
        panjangBentangan={data.panjangBentangan}
        panjangBibir={data.panjangBibir}
        deskripsi={data.content}
        jenisPembangunan={data.jenisPembangunan}
        tahunPembuatan={data?.tahunPembuatan || 0}
        panjangPapanPijak={data?.panjangPapanPijak || 0}
        lebarGapuraDalam={data.lebarGapuraDalam || 0}
        lebarGapuraAs={data.lebarGapuraAs || 0}
        gambar={data.image}
        jembatanId={data.id}
        panjangGapuraAnchorBelakang={data?.panjangGapuraAnchorBelakang || 0}
        boxGapura={data.boxGapura || 0}
        panjangBoxAnchorBelakang={data.panjangBoxAnchorBelakang || 0}
        tinggiGapura={data.tinggiGapura || 0}
        jenisBesiTiang={data.jenisBesiTiang || ""}
      />
      <h1>{data?.id}</h1>
    </>
  );
}
