"use server";

import { createSupabaseServerClient } from "@/utils/supabase-server-client";

export const getProducts = async () => {
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.from("products")
    .select("slug, cover, title");

  return data;
};

export const getProduct = async (slug) => {
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.from("products")
    .select("id, slug, model_photo, details_photo, title, description, price, sizes, material, color, cover")
    .eq("slug", slug);

  return data;
};

export const getOtherProducts = async (currentSlug) => {
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.from("products")
    .select("slug, cover, title")
    .not("slug", "eq" , currentSlug);

  return data;
};
