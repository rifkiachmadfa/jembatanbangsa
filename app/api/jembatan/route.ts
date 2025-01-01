// app/api/bridge/route.ts
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(req: Request) {
  const data = await req.json();

  try {
    const newJembatan = await db.jembatan.create({ data });
    return NextResponse.json(newJembatan);
  } catch (error) {
    return NextResponse.json(console.error(error));
  }
}

