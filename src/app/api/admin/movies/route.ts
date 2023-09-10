import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({
      error: "You must sign in to view movies.",
    });
  }
  return NextResponse.json({
    movies: [
      { title: "Alien vs Predator", id: 1 },
      { title: "Reservoir Dogs", id: 2 },
    ],
  });
}
