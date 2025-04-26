import { createSupabaseBrowserClient } from "@/utils/supabase-browser-client";

export const getProducts = async () => {
  const supabase = await createSupabaseBrowserClient();
  const { data } = await supabase.from("products")
    .select("slug, cover, model_photo, details_photo, title, description")

  return data;
};
