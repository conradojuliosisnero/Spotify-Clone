import { NextResponse } from "next/server";
import getAlbums from "@/services/albums";

export async function GET({params}) {  
  const query = params.id
  try {
    const response = await getAlbums(query);
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
