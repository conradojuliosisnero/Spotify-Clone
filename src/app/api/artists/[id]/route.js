import { NextResponse } from "next/server";
import getArtist from "@/services/artist";

export async function GET(req,{ params }) {
  const query = params.id;
  try {
    const response = await getArtist(query);
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
