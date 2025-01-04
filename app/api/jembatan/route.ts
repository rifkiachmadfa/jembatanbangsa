// app/api/bridge/route.ts

import { NextResponse, NextRequest } from "next/server";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

// POST Handler
export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
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
    } = body;
    // Insert data into the `jembatan` table
    const newJembatan = await db.jembatan.create({
      data: {
        judul,
        alamat,
        content,
        image,
        penerimaManfaat,
        panjangBentangan,
        panjangBibir,
        jenisPembangunan,
        panjangPapanPijak,
        lebarGapuraDalam,
        user: {
          connect: {
            email: session?.user.email as string,
          },
        },
      },
    });

    return NextResponse.json({
      message: "Data inserted successfully",
      newJembatan,
    });
  } catch (error) {
    console.error("Error inserting data:", error);
    return NextResponse.json({ error: "Invalid JSON format" }, { status: 400 });
  }
}

// GET Handler
export async function GET() {
  try {
    const data = await db.jembatan.findMany();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching data in GET:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
