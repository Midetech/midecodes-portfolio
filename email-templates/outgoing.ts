
interface OutgoingEmailData {
    name: string;
    email: string;
    phone: string;
    subject: string;
}

export const outgoingEmail = (props: OutgoingEmailData) => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Contacting Me</title>
    <style>
        /* Reset styles */
        body, table, td, div, p {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            line-height: 1.6;
        }
        /* Responsive container */
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        /* Social media icons */
        .social-links {
            padding: 20px 0;
            text-align: center;
        }
        .social-links a {
            margin: 0 10px;
            text-decoration: none;
            color: #333;
        }
        /* Footer */
        .footer {
            text-align: center;
            padding: 20px;
            background-color: #f8f9fa;
            color: #6c757d;
            font-size: 14px;
        }
        /* Responsive design */
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
        <p>Dear ${props.name},</p>
        
        <p>Thank you for reaching out! I have received your message regarding "${props.subject}" and appreciate your interest.</p>
        
        <p>I will review your message carefully and get back to you within 24-48 hours. Your message is important to me, and I look forward to our potential collaboration.</p>
        
        <p>For your reference, here's a summary of the information you provided:</p>
        <ul>
            <li>Subject: ${props.subject}</li>
            <li>Email: ${props.email}</li>
            <li>Phone: ${props.phone}</li>
        </ul>
        
        <p>Best regards,<br>Sunday Olomitutu<br>Software Engineer</p>
        
        <div class="social-links">
            <a href="mailto:hello@mide.codes">📧 Email</a>
            <a href="https://github.com/midetech">🔗 GitHub</a>
            <a href="https://linkedin.com/in/developermide">💼 LinkedIn</a>
            <a href="https://twitter.com/midecodeable">𝕏 Twitter</a>
        </div>
        
        <div class="footer">
            © ${new Date().getFullYear()} Midecodes. All rights reserved.
        </div>
    </div>
</body>
</html>
`
}
