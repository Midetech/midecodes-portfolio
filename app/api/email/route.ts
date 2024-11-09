

import { sendClientEmail } from '@/lib/client-mail';
import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
    try {

        const { email, name, phone, subject } = await req.json();

        if (!email) {
            return NextResponse.json({ error: 'Email is required' });
        }

        try {
            const data = await sendClientEmail({
                email, name, phone, subject,
            });
            return NextResponse.json({ success: true, message: 'Email sent successfully', data });
        } catch (error) {
            console.error('Failed to send email:', error);
            return NextResponse.json({ error: 'Failed to send email to client' });
        }
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: 'Error adding currency',
            error
        });

    }
}
