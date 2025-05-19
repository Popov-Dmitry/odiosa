import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15"
});

export async function GET(req) {
  const sessionId = req.nextUrl.searchParams.get("session_id");
  if (!sessionId) {
    return new Response("Missing session_id", { status: 400 });
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId);

  return new Response(
    JSON.stringify({ paid: session.payment_status === "paid" }),
    { status: 200 }
  );
}
