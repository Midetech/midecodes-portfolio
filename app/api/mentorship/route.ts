

import { sendMentorshipEmail } from '@/lib/mentor-email';
import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
    try {

        const { name, email, role, roadmap_link, whatsapp_group_link } = await req.json();

        if (!email) {
            return NextResponse.json({ error: 'Email is required' });
        }

        try {
            const data = await sendMentorshipEmail({
                name, email, role, roadmap_link, whatsapp_group_link,
            });
            return NextResponse.json({ success: true, message: 'Email sent successfully', data });
        } catch (error) {
            console.error('Failed to send email:', error);
            return NextResponse.json({ error: 'Failed to send email to client' });
        }
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: 'Error sending email',
            error
        });

    }
}
