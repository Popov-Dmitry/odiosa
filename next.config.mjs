/** @type {import("next").NextConfig} */
const { SUPABASE_URL, SUPABASE_ANON_KEY, STRIPE_SECRET_KEY } = process.env;

const nextConfig = {
  env: {
    SUPABASE_URL,
    SUPABASE_ANON_KEY,
    STRIPE_SECRET_KEY
  },
  images: {
    remotePatterns: [
      {
        protocol: "https", // ✅ БЕЗ двоеточия
        hostname: "hgtrfoehnzfekildnoab.supabase.co",
        pathname: "/storage/v1/object/public/**"
      }
    ]
  }
};

export default nextConfig;
