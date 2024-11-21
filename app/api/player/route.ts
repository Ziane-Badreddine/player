import db from "@/prisma/route";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json();

    const newPlayer = await db.player.create({
        data:{
            ...body
        }
    })

    return NextResponse.json(newPlayer,{status: 201})

}