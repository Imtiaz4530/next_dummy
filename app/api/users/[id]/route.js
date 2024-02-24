import { user } from "@/app/utils/db";
import { NextResponse } from "next/server";

export function GET(request, content) {
    const userData = user.filter((item) => (item.id === content.params.id))

    return NextResponse.json(userData.length === 0 ? {result: "user not found", success: false} : {result: userData, success: true} )
}

export function POST(request) {
    console.log(request);
    return NextResponse.json({result: 'Post completed.'})
}


