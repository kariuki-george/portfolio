import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ name: "Kariuki George", skill: "developer" });
}
