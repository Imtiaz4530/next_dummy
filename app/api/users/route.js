import { user } from "@/app/utils/db";
import { NextResponse } from "next/server";

export async function GET(request) {
    return NextResponse.json(user)
}