import { NextResponse } from "next/server";
import getRecomendations from "@/services/recomendations";

export async function GET(request) {
  console.log(request);
  try {
    const response = await getRecomendations();
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
