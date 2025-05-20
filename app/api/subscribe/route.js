import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { email } = await req.json();

  if (!email) {
    return new Response(JSON.stringify({ error: "Missing email" }), { status: 400 });
  }

  try {
    const response = await resend.contacts.create({
      email,
      audienceId: process.env.RESEND_AUDIENCE_ID
    });

    return new Response(JSON.stringify(response), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Failed to subscribe" }), { status: 500 });
  }
}
