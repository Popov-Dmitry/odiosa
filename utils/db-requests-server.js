"use server";

import { createSupabaseServerClient } from "@/utils/supabase-server-client";

export const getProducts = async () => {
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.from("products")
    .select("slug, cover, cover_inner, title")
    .eq("is_show", true)
    .order("title");

  return Array.from(
    new Map(data.map(item => [item.slug, item])).values()
  );
};

export const getProduct = async (slug) => {
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.from("products")
    .select("id, slug, model_photo, details_photo, title, description, price, sizes, material, color, cover, cover_inner, mobile_photos")
    .eq("slug", slug);

  return data;
};

export const getOtherProducts = async (currentSlug) => {
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.from("products")
    .select("slug, cover, title")
    .not("slug", "eq" , currentSlug)
    .order("title");

  return Array.from(
    new Map(data.map(item => [item.slug, item])).values()
  );
};
