// app/api/send-email/route.js
import nodemailer from "nodemailer";

export async function POST(request) {
  const { name, email, message } = await request.json();

  console.log("mainwaltest@gmail.com", process.env.EMAIL_PASS);

  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({ message: "Missing required fields" }),
      { status: 400 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: `New Contact Message from ${name}`,
      text: message,
      html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Failed to send email", error: error.message }),
      { status: 500 }
    );
  }
}
