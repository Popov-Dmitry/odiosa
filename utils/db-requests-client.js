import { createSupabaseBrowserClient } from "@/utils/supabase-browser-client";

export const getProductsFromCart = async (cart) => {
  const supabase = await createSupabaseBrowserClient();
  const { data } = await supabase.from("products")
    .select("id, slug, cover, title, price, sizes, material, color, color_label")
    .in("id", cart.map((item) => item.toString().split("-")[0]));

  if (data && data.length > 0) {
    return cart.map((item) => {
      const [id, size] = item.toString().split("-");
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
          color: product.color,
          color_label: product.color_label,
        }
      }
      return null;
    }).filter(item => item !== null);
  }

  return [];
};
