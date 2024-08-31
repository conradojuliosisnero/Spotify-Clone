import { NextResponse } from "next/server";
import getSearchTracks from "@/services/search";

export async function GET(request) {
  const url = new URL(request.url);
  const query = url.searchParams.get("q");
  console.log(query);
  try {
    const response = await getSearchTracks(query);
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
