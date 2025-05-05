"use server";

import { createSupabaseServerClient } from "@/utils/supabase-server-client";

export const getProduct = async (slug) => {
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.from("products")
    .select("id, slug, model_photo, details_photo, title, description, price, sizes, material, color")
    .eq("slug", slug);

  return data;
};
