import React from "react";
import Options from "@/components/options";
import ContactTheManager from "@/components/contact-the-manager";
import { getOtherProducts, getProduct } from "@/utils/db-requests-server";
import { redirect } from "next/navigation";
import OrderButton from "@/client-components/order-button";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({ params }) {
  return {
    title: `Odiosa – ${params.slug.toUpperCase().split("-").join(" ")}`,
    description: `Odiosa – ${params.slug.toUpperCase().split("-").join(" ")}`,
    openGraph: {
      title: `Odiosa – ${params.slug.toUpperCase().split("-").join(" ")}`,
      url: `https://odiosa.vercel.app/collection/${params.slug}`
    }
  };
}

const ProductCard = async ({ params, searchParams }) => {
  const { slug } = await params;
  const { color, size } = await searchParams;
  const products = await getProduct(slug);
  const otherProducts = await getOtherProducts(slug);

  if (!products || !products.length) {
    redirect("/collection");
  }

  const product = color ? (products.find((product) => product.color === color) || products[0]) : products[0];

  return (
    <div>
      <div className="lg:hidden">
        <div>
          <div className="px-2.5">
            <div className="flex items-center justify-between gap-2.5 text-[26px] uppercase text-glow-15">
              <div>{product.title}</div>
              <div>${product.price}</div>
            </div>
            <div className="text-xl text-glow-10">
              Material: {product.material}
            </div>
            <div className="mt-5 h-96 relative">
              <Image src={product.cover_inner} alt={product.title} fill className="object-contain" />
            </div>
            <Options
              colors={products.map((product) => product.color)}
              sizes={product.sizes}
              defaultSize={size ? size : product.sizes.includes("m") ? "m" : sizes[0]}
              defaultColor={product.color}
              className="mt-10"
            />
            <OrderButton className="mt-8" id={product.id} size={size ? size : product.sizes.includes("m") ? "m" : sizes[0]} />
          </div>
          <div className="mt-5 lg:mt-0">
            <div className="px-2.5 text-[26px] text-glow-10 uppercase lg:hidden">Collection</div>
            <div className="mt-5 flex gap-4 overflow-x-scroll overflow-y-hidden px-1.5 hide-scrollbar lg:grid lg:grid-cols-4 lg:gap-x-5 lg:gap-y-20 lg:relative">
              {otherProducts?.map((item, index) => (
                <Link
                  key={index}
                  className="flex flex-col items-center gap-1 lg:gap-0 cursor-pointer relative aspect-[1.5/3] min-[1800px]:aspect-[1.8/3]"
                  href={`/collection/${item.slug}`}
                >
                  <div className="min-w-[80px] lg:w-full h-full flex items-center relative">
                    <Image fill src={item.cover} alt={item.title} className="object-contain" />
                  </div>
                  <div className="mt-auto whitespace-nowrap text-xs lg:text-2xl lg:text-glow-15 lg:pt-5 lg:whitespace-normal">
                    {item.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-10 px-2.5">
            <div className="text-[26px] text-glow-10 uppercase">Product Details</div>
            <div className="text-xl text-glow-10">
              {product.description}
            </div>
          </div>
        </div>
        <img src={product.details_photo} alt="" className="pl-[9px] pr-3.5" />
        <div className="mt-9 ml-[15px] mr-3.5">
          <img src={product.model_photo} alt="" />
        </div>
      </div>
      <div className="hidden lg:block pt-[30px]">
        <div className="grid grid-cols-2 gap-5 px-10 min-h-[calc(100vh_-_60px_-_96px)]">
          <div className="flex flex-col justify-between">
            <div>
              <div className="text-[54px] text-glow-30 uppercase">{product.title}</div>
              <div className="text-[44px] text-glow-25 mt-16">
                {product.description}
              </div>
            </div>
            <div>
              <div className="text-[44px] text-glow-30 text-right">
                Material: {product.material}
              </div>
              <Options colors={products.map((product) => product.color)} sizes={product.sizes} defaultSize="m" className="mt-5" />
              <OrderButton className="mt-[60px]" id={product.id} size={size ? size : product.sizes.includes("m") ? "m" : sizes[0]} />
            </div>
          </div>
          <div className="relative flex justify-end h-[calc(100vh_-_60px_-_96px)]">
            <Image src={product.cover_inner} alt={product.title} fill className="object-contain" />
            <div className="text-[54px] text-glow-30 absolute">{product.price}$</div>
          </div>
        </div>
        <div className="mt-32 px-10 flex justify-center">
          <img src={product.model_photo} alt="" />
        </div>
        <div className="mt-20 pl-10">
          <div className="text-[54px] text-glow-30">Details</div>
          <div className="flex justify-center">
            <img src={product.details_photo} alt="" />
          </div>
        </div>
      </div>
      <ContactTheManager className="mt-[60px] lg:mt-0" />
    </div>
  );
};

export default ProductCard;