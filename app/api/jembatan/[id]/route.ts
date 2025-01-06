import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const data = await params;
    const body = await req.json();

    const {
      judul,
      alamat,
      content,
      image,
      panjangBentangan,
      penerimaManfaat,
      panjangBibir,
      jenisPembangunan,
      panjangPapanPijak,
      lebarGapuraDalam,
      tahunPembuatan,
      panjangGapuraAnchorBelakang,
      lebarGapuraAs,
      boxGapura,
      panjangBoxAnchorBelakang,
      tinggiGapura,
      jenisBesiTiang,
    } = body;

    const updatedJembatan = await db.jembatan.update({
      where: { id: data.id },

      data: {
        judul,
        alamat,
        content,
        image,
        panjangBentangan,
        penerimaManfaat,
        panjangBibir,
        jenisPembangunan,
        panjangPapanPijak,
        lebarGapuraDalam,
        tahunPembuatan,
        panjangGapuraAnchorBelakang,
        lebarGapuraAs,
        boxGapura,
        panjangBoxAnchorBelakang,
        tinggiGapura,
        jenisBesiTiang,
      },
    });

    console.log("Updated Jembatan:", updatedJembatan);

    return NextResponse.json({
      message: "Data inserted successfully",
      updatedJembatan,
    });
  } catch (error) {
    console.error("Error fetching data in GET:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
