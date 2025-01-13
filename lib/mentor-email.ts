

import { mentorshipRegisterationEmail } from "@/email-templates/mentorship";
import { outgoingEmail } from "@/email-templates/outgoing";
import { SendMailClient } from "zeptomail";

interface EmailOptions {
    email: string;
    role: string;
    name: string;
    roadmap_link: string;
    whatsapp_group_link: string;
}

const url = process.env.ZOHO_URL;
const token = process.env.NEX_ZOHO_TOKEN;

let client = new SendMailClient({ url, token });
export async function sendMentorshipEmail({ email, name, roadmap_link, role, whatsapp_group_link }: EmailOptions) {

    try {

        const info = client.sendMail({
            "from":
            {
                "address": process.env.NEX_EMAIL_FROM,
                "name": "Sunday Olomitutu"
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
            "subject": `Excited to Guide You: Your ${role} Mentorship Begins!`,
            "htmlbody": mentorshipRegisterationEmail({ name, email, role, roadmap_link, whatsapp_group_link }),
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






