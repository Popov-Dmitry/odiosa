import React from "react";
import Button from "@/components/button";
import Options from "@/components/options";
import ModelViewer from "@/components/model-viewer";
import ContactTheManager from "@/components/contact-the-manager";
import { getProduct } from "@/utils/db-requests-server";
import { redirect } from "next/navigation";

const ProductCard = async ({ params }) => {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    redirect("/collection");
  }

  return (
    <div>
      <div className="lg:hidden">
        <div className="px-2.5">
          <div className="flex items-center justify-between gap-2.5 text-[26px] uppercase text-glow-15">
            <div>{product.title}</div>
            <div>$${product.price}</div>
          </div>
          <div className="text-xl text-glow-10">
            Material: {product.material}
          </div>
          <div className="mt-5 h-96">
            <ModelViewer model="papa-pas.glb" device="mobile" />
          </div>
          <Options colors={product.colors} sizes={product.sizes} defaultSize="m" className="mt-10" />
          <Button variant="outlined" text="ORDER" className="mt-8" />
          <div className="mt-10 text-xl text-glow-10">
            {product.description}
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
              <Options colors={product.colors} sizes={product.sizes} defaultSize="m" className="mt-5" />
              <Button variant="outlined" text="ORDER" className="mt-[60px]" />
            </div>
          </div>
          <div className="relative flex justify-end h-[calc(100vh_-_60px_-_96px)]">
            <ModelViewer model="papa-pas.glb" device="desktop" />
            <div className="text-[54px] text-glow-30 absolute">{product.price}$</div>
          </div>
        </div>
        <div className="mt-32 px-10">
          <img src={product.model_photo} alt="" />
        </div>
        <div className="mt-20 pl-10">
          <div className="text-[54px] text-glow-30">Details</div>
          <img src={product.details_photo} alt="" />
        </div>
      </div>
      <ContactTheManager className="mt-[60px] lg:mt-0" />
    </div>
  );
};

export default ProductCard;