

import { outgoingEmail } from "@/email-templates/outgoing";
import { SendMailClient } from "zeptomail";

interface EmailOptions {
    name: string;
    email: string;
    phone: string;
    subject: string;
}

const url = process.env.ZOHO_URL;
const token = process.env.ZOHO_TOKEN;

let client = new SendMailClient({ url, token });
export async function sendClientEmail({ email, name, subject, phone }: EmailOptions) {

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
                            "address": email,
                            "name": name
                        }
                    }
                ],
            "subject": "Thank You for Contacting Me",
            "htmlbody": outgoingEmail({ name, subject, email, phone }),
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






