import Stripe from "stripe";
import { createSupabaseBrowserClient } from "@/utils/supabase-browser-client";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15"
});

const supabase = await createSupabaseBrowserClient();

export async function POST(req) {
  try {
    const { cart } = await req.json();

    if (!cart || !Array.isArray(cart)) {
      return new Response(JSON.stringify({ error: "No cart provided" }), { status: 400 });
    }

    const { data: items, error } = await supabase
      .from("products")
      .select("id, title, price, cover")
      .in("id", cart.map((item) => item.toString().split("-")[0]));

    if (error || !items) {
      throw new Error("Error fetching products");
    }

    const lineItems = cart.map((item) => {
      const [id, size] = item.toString().split("-");
      const product = items.find((item) => item.id.toString() === id);
      if (product) {
        return {
          price_data: {
            currency: "eur",
            product_data: {
              name: size ? `${product.title}, ${size.toUpperCase()}` : product.title,
              images: product.cover ? [product.cover] : undefined,
              metadata: {
                productId: id.toString()
              }
            },
            unit_amount: product.price * 100
          },
          quantity: 1
        };
      }
      return null;
    }).filter(item => item !== null);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: lineItems,
      success_url: `${req.nextUrl.origin}/checkout-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.nextUrl.origin}/bag`
    });

    return new Response(JSON.stringify({ url: session.url }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 });
  }
}
