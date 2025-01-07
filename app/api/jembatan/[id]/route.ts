import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
type tParams = Promise<{ id: string[] }>;
export async function PUT(req: Request, { params }: { params: tParams }) {
  const { id } = await params;
  const idString = String(id);
  console.log(id);
  try {
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
      where: { id: idString },

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

export async function DELETE(req: Request, { params }: { params: tParams }) {
  const { id } = await params;
  const idString = String(id);
  try {
    // Ambil sesi pengguna
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    // Ambil data jembatan berdasarkan ID
    const jembatan = await db.jembatan.findUnique({
      where: { id: idString },
      include: {
        user: true,
      },
    });

    if (!jembatan) {
      return NextResponse.json(
        { success: false, message: "Data not found" },
        { status: 404 }
      );
    }

    // Validasi: hanya admin atau user yang terkait yang dapat menghapus
    if (
      session.user.role !== "admin" &&
      session.user.email !== jembatan.user.email
    ) {
      return NextResponse.json(
        { success: false, message: "Forbidden", data: jembatan },
        { status: 403 }
      );
    }

    // Hapus data
    const data = await db.jembatan.delete({
      where: { id: idString },
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error during delete:", error);

    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
