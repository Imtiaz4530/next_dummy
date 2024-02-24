import { connectionSTR } from "@/app/lib/db";
import { Product } from "@/app/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    mongoose.connect(connectionSTR)
    const data = await Product.find()
    console.log(data);

    return NextResponse.json({result: true})
}