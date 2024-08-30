import { NextResponse } from "next/server";
import getAlbums from "@/services/albums";

export async function GET(request) {
    const url = new URL(request.url);
    const query = url.searchParams.get("id");
  try {
    const response = await getAlbums(query);
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
