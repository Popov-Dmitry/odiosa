/** @type {import('next').NextConfig} */
const { DRAGGABLE_DEBUG } = process.env;

const nextConfig = {
  env : {
    DRAGGABLE_DEBUG
  }
};

export default nextConfig;
