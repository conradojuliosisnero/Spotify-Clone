import { NextResponse } from "next/server";
import getArtist from "@/services/artist";

export async function GET(request) {
  const url = new URL(request.url);
  const query = url.searchParams.get("id");
  try {
    const response = await getArtist(query);
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
