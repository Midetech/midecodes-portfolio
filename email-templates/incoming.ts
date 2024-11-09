
interface IncomingEmailData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    timestamp: string;
}
export const incomingEmail = (props: IncomingEmailData) => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
        /* Same styles as above */
        body, table, td, div, p {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            line-height: 1.6;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .message-box {
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 5px;
            margin: 20px 0;
        }
        .contact-details {
            background-color: #e9ecef;
            padding: 15px;
            border-radius: 5px;
            margin: 20px 0;
        }
        @media screen and (max-width: 600px) {
            .container {
                width: 100% !important;
                padding: 10px !important;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>New Contact Form Submission</h2>
        
        <div class="contact-details">
            <p><strong>Name:</strong> ${props.name}</p>
            <p><strong>Email:</strong> ${props.email}</p>
            <p><strong>Phone:</strong> ${props.phone}</p>
            <p><strong>Subject:</strong> ${props.subject}</p>
            <p><strong>Submission Time:</strong> ${props.timestamp}</p>
        </div>
        
        <div class="message-box">
            <h3>Message:</h3>
            <p>${props.message}</p>
        </div>
        
        <p>Quick Actions:</p>
        <ul>
            <li><a href="mailto:${props.email}">Reply to ${props.name}</a></li>
            <li><a href="tel:${props.phone}">Call ${props.name}</a></li>
        </ul>
    </div>
</body>
</html>`
}
