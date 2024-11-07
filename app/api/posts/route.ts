import { ICreatePost } from "@/interfaces/post.interface";
import clientPromise from "@/lib/mongodb";
import { NextResponse } from 'next/server';




export const GET = async (req: Request) => {
    try {
        const client = await clientPromise;
        const db = client.db("test-db");
        const posts = await db
            .collection("posts")
            .find({})
            .sort({ _id: -1 })
            .limit(30)
            .toArray();
        return NextResponse.json({
            status: true,
            message: 'Posts fetched successfully',
            data: posts

        })
    } catch (e) {
        console.error(e);
    }
};


