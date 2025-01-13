interface EmailData {
  email: string;
  role: string;
  name: string;
  roadmap_link: string;
  whatsapp_group_link: string;
}

export const mentorshipRegisterationEmail = (props: EmailData) => {


  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to the Mentorship Program</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
      margin: 0;
      padding: 0;
      color: #333;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      background: #ffffff;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }
    .header {
      background-color: #007BFF;
      color: #ffffff;
      text-align: center;
      padding: 20px;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      padding: 20px;
    }
    .content p {
      line-height: 1.6;
    }
    .button {
      display: inline-block;
      padding: 10px 20px;
      margin-top: 10px;
      background-color: #007BFF;
      color: #ffffff;
      text-decoration: none;
      border-radius: 4px;
    }
    .button:hover {
      background-color: #0056b3;
    }
    .footer {
      background-color: #f3f4f6;
      text-align: center;
      padding: 10px;
      font-size: 12px;
      color: #666;
    }
    .footer a {
      color: #007BFF;
      text-decoration: none;
    }
    .footer a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Welcome to the Mentorship Program!</h1>
    </div>
    <div class="content">
      <p>Hi <strong>${props.name}</strong>,</p>

      <p>We’re excited to have you onboard as a mentee for the <strong>${props.role}</strong> mentorship track! Our goal is to guide you through a personalized learning journey, helping you achieve your career aspirations in tech.</p>

      <p>Here’s what you need to get started:</p>
      <ul>
        <li>📚 Access your personalized roadmap: <a href="${props.roadmap_link}" class="button">${props.role} Roadmap</a></li>
        <li>💬 Join the WhatsApp group for your mentorship track: <a href="${props.whatsapp_group_link}">Join Group</a></li>
      </ul>

      <h2>What to Expect</h2>
      <ul>
        <li>👥 Connect with experienced mentors and peers</li>
        <li>📝 Set clear goals and track your progress</li>
        <li>🚀 Learn, grow, and accelerate your career</li>
        <li>🤝 Collaborate, ask questions, and share your progress</li>
        </ul>


        <p>We’ll be hosting two weekly sessions to guide your progress and answer any questions:</p>
        <ul>
          <li>📅 <strong>Weekday Session:</strong> Wednesdays: 8 PM – 10 PM</li>
          <li>📅 <strong>Weekend Session:</strong> Saturdays: 7 PM – 9 PM</li>
        </ul>
        <p>Attendance is crucial for staying on track, so please make every effort to join on time.</p>
        <br/>
        <p>You will get an invite to your team on roapmap soon. Please accept the invite because this is the only way you access the roadmap link. If you are unable to access the link after invite send a message to your group and someone will help you</p>
      <p>We believe in fostering collaboration and learning. Please feel free to engage with your mentors and peers, ask questions, and share your progress!</p>

      <p>If you have any questions or need assistance, reply to this email or contact us directly.</p>

      <p>Let’s make great strides together 🚀!</p>

      <p>Best regards,<br>
      Sunday Olomitutu<br>
      Mentorship Program Lead</p>
    </div>
    <div class="footer">
      <p>You’re receiving this email because you registered for our mentorship program. If this was a mistake, please <a href="#">unsubscribe</a>.</p>
    </div>
  </div>
</body>
</html>
`
}
