import { ObjectId } from 'mongodb';

import clientPromise from "@/lib/mongodb";
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: Promise<{ slug: string }> }) {
    try {
        // Connect to MongoDB
        const client = await clientPromise;
        const db = client.db('test-db'); // Replace with your actual database name

        // Extract the ID from the request URL params
        const slug = (await params).slug

        // Validate and convert the ID to MongoDB ObjectId
        if (!ObjectId.isValid(slug)) {
            return NextResponse.json({ message: 'Invalid ID' }, { status: 400 });
        }

        // Find the vehicle by ID
        const vehicle = await db.collection('posts').findOne({ _id: new ObjectId(slug) });

        // Check if the vehicle was found
        if (!vehicle) {
            return NextResponse.json({ message: 'Post not found' }, { status: 404 });
        }

        // Return the vehicle data
        return NextResponse.json(vehicle);
    } catch (error) {
        return NextResponse.json({ message: 'Error fetching post', error }, { status: 500 });
    }
}
