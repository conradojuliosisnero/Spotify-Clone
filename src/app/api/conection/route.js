import { NextResponse } from "next/server";

export async function GET() { 
    try {
        
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}