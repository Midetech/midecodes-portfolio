import clientPromise from "@/lib/mongodb";
import { NextResponse } from 'next/server';

type MenteeProps = {
    email: string;
    phone: string;
    name: string;
    updatedAt: Date;
    createdAt: Date;
    role: string,
    interest: string

}

export const POST = async (req: Request) => {
    try {
        const client = await clientPromise;
        const db = client.db('test-db');
        const mentee: MenteeProps = await req.json();

        const menteeWithTimestamps: MenteeProps = {
            ...mentee,
            updatedAt: new Date(),
            createdAt: new Date(),
        }

        const existUser = await db.collection('mentee').findOne({
            $or: [
                { email: menteeWithTimestamps.email },
                { phone: menteeWithTimestamps.phone }
            ]
        });

        if (existUser) {
            return NextResponse.json({
                status: false,
                message: 'It seems like you’ve already registered for mentorship. You’re all set! 🎉'
            })

        }
        const post = await db.collection('mentee').insertOne(menteeWithTimestamps);
        const newPost = await db.collection('mentee').findOne({ _id: post.insertedId });

        return NextResponse.json({
            status: true,
            message: "Congratulations! 🎉 You’ve successfully registered for mentorship",
            data: newPost
        })
    } catch (error) {
        return NextResponse.json({
            status: false,
            message: 'Error occurred, please try again',
            error
        });
    }
}


export const GET = async (req: Request) => {
    try {
        const client = await clientPromise;
        const db = client.db("test-db");
        const product = await db
            .collection("mentee")
            .find({ role: 'Product Manager' })
            .toArray();
        const testers = await db
            .collection("mentee")
            .find({ role: 'Software Tester' })
            .toArray();
        const frontends = await db
            .collection("mentee")
            .find({ role: 'Frontend Developer' })
            .toArray(); const backends = await db
                .collection("mentee")
                .find({ role: 'Backend Developer' })
                .toArray();
        return NextResponse.json({
            status: true,
            message: 'Posts fetched successfully',
            data: {
                products: product.length, testers: testers.length, frontends: frontends.length, backends: backends.length
            }

        })
    } catch (e) {
        console.error(e);
    }
};

