

import { incomingEmail } from "@/email-templates/incoming";
import { outgoingEmail } from "@/email-templates/outgoing";
import { SendMailClient } from "zeptomail";

interface EmailOptions {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

const url = process.env.ZOHO_URL;
const token = process.env.ZOHO_TOKEN;

let client = new SendMailClient({ url, token });
export async function sendEmail({ email, name, subject, phone, message }: EmailOptions) {

    try {

        const info = client.sendMail({
            "from":
            {
                "address": process.env.EMAIL_FROM,
                "name": "Midecodes - Sunday Olomitutu"
            },
            "to":
                [
                    {
                        "email_address":
                        {
                            "address": process.env.EMAIL_TO,
                            "name": name
                        }
                    }
                ],
            "subject": subject,
            "htmlbody": incomingEmail({
                name, subject, email, phone,
                timestamp: new Date().toLocaleString(),
                message
            }),
        });
        return info;
    } catch (error) {
        console.error('Error sending email: ', error);
        if (error instanceof Error) {
            console.error('Error name:', error.name);
            console.error('Error message:', error.message);
            console.error('Error stack:', error.stack);
        }
        throw error;
    }
}






