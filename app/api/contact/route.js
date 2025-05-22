import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { name, email, title, href } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "noreply@odiosa.eu",
      to: "info@odiosa.eu",
      subject: title,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
             <p><strong>Product:</strong> <a target="_blank" rel="noopener noreferrer" href="${href}">${title}</a></p>
            `
    });

    return new Response(JSON.stringify({ success: true, id: data.id }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to send email", details: error }), { status: 500 });
  }
}
