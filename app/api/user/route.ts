import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import * as z from 'zod'

const UserSchema = z
  .object({
    username: z.string().min(1, 'Username is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have than 8 characters'),

  })


export async function POST(req: Request) {
  try {
    // Pastikan permintaan body adalah JSON valid
    let body;
    try {
      body = await req.json();
    } catch (error) {
      return NextResponse.json(
        { user: null, message: "Invalid JSON body", error },
        { status: 400 },   // 400 Bad Request
      );
    }

    const { email, password, username } = UserSchema.parse(body) ;

    // Cek apakah email sudah digunakan
    const existingUserByEmail = await db.user.findUnique({
      where: { email },
    });

    if (existingUserByEmail) {
      return NextResponse.json(
        { user: null, message: "User with this email already exists" },
        { status: 409 }
      );
    }

    // Cek apakah username sudah digunakan
    const existingUserByUsername = await db.user.findUnique({
      where: { username },
    });

    if (existingUserByUsername) {
      return NextResponse.json(
        { user: null, message: "User with this username already exists" },
        { status: 409 }
      );
    }

    // Hash password dan buat user baru
    const hashedPassword = await hash(password, 10);
    const newUser = await db.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    const  {password: newUserPassword, ...rest} = newUser

    return NextResponse.json(
      { user: rest, message: "User created successfully", newUserPassword },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in POST /api/user:", error);
    return NextResponse.json(
      { user: null, message: "Internal server error" },
      { status: 500 }
    );
  }
}
