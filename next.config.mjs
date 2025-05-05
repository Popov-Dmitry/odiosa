/** @type {import('next').NextConfig} */
const { SUPABASE_URL, SUPABASE_ANON_KEY, STRIPE_SECRET_KEY } = process.env;

const nextConfig = {
  env : {
    SUPABASE_URL,
    SUPABASE_ANON_KEY,
    STRIPE_SECRET_KEY
  }
};

export default nextConfig;
