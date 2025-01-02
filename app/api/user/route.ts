import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import * as z from "zod";

// Validasi dengan Zod
const UserSchema = z.object({
  username: z.string().min(1, "Username is required").max(100),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have at least 8 characters"),
});

export async function POST(req: Request) {
  try {
    // Pastikan body berupa JSON
    if (req.headers.get("content-type") !== "application/json") {
      return NextResponse.json(
        { user: null, message: "Content-Type must be application/json" },
        { status: 400 }
      );
    }

    // Parse body dan validasi dengan Zod

    const body = await req.json();
    const { email, password, username } = UserSchema.parse(body);

    // Cek apakah email sudah terdaftar
    const existingUserByEmail = await db.user.findUnique({ where: { email } });
    if (existingUserByEmail) {
      return NextResponse.json(
        { user: null, message: "User with this email already exists" },
        { status: 409 }
      );
    }

    // Cek apakah username sudah terdaftar
    const existingUserByUsername = await db.user.findUnique({
      where: { username },
    });
    if (existingUserByUsername) {
      return NextResponse.json(
        { user: null, message: "User with this username already exists" },
        { status: 409 }
      );
    }

    // Hash password dan simpan user baru
    const hashedPassword = await hash(password, 10);
    const newUser = await db.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    // Hilangkan password dari respons
    const { password: _password, ...userWithoutPassword } = newUser;

    return NextResponse.json(
      { user: userWithoutPassword, message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { user: null, message: "Invalid input", errors: error.errors },
        { status: 400 }
      );
    }

    console.error("Error during user registration:", error);
    return NextResponse.json(
      { user: null, message: "Internal server error" },
      { status: 500 }
    );
  }
}
