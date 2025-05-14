import Stripe from "stripe";
import { createSupabaseBrowserClient } from "@/utils/supabase-browser-client";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15"
});

const supabase = await createSupabaseBrowserClient();

export async function POST(req) {
  try {
    const { itemIds } = await req.json();

    if (!itemIds || !Array.isArray(itemIds)) {
      return new Response(JSON.stringify({ error: "No item IDs provided" }), { status: 400 });
    }

    const { data: items, error } = await supabase
      .from("products")
      .select("id, title, price, cover")
      .in("id", itemIds);

    if (error || !items) {
      throw new Error("Error fetching products");
    }

    const lineItems = items.map((item) => ({
      price_data: {
        currency: "eur",
        product_data: {
          name: item.title,
          images: item.cover ? [item.cover] : undefined,
          metadata: {
            productId: item.id.toString()
          }
        },
        unit_amount: item.price * 100
      },
      quantity: 1
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: lineItems,
      success_url: `${req.nextUrl.origin}`,
      cancel_url: `${req.nextUrl.origin}`
    });

    return new Response(JSON.stringify({ url: session.url }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 });
  }
}
