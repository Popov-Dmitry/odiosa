import { createSupabaseBrowserClient } from "@/utils/supabase-browser-client";

export const getProducts = async () => {
  const supabase = await createSupabaseBrowserClient();
  const { data } = await supabase.from("products")
    .select("slug, cover, model_photo, details_photo, title, description")

  return data;
};

export const getProductsFromCart = async (cart) => {
  const supabase = await createSupabaseBrowserClient();
  const { data } = await supabase.from("products")
    .select("id, slug, cover, title, price, sizes, material, color")
    .in("id", cart.map((item) => item.split("-")[0]));

  if (data && data.length > 0) {
    return cart.map((item) => {
      const [id, size] = item.split("-");
      const product = data.find((item) => item.id.toString() === id);
      if (product) {
        return {
          id: product.id,
          slug: product.slug,
          cover: product.cover,
          title: product.title,
          price: product.price,
          size,
          material: product.material,
          color: product.color
        }
      }
      return null;
    }).filter(item => item !== null);
  }

  return [];
};
