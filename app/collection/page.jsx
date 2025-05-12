"use client";

import React, { useEffect, useState } from "react";
import ContactTheManager from "@/components/contact-the-manager";
import clsx from "clsx";
import { getProducts } from "@/utils/db-requests-client";
import useResponsive from "@/hooks/use-responsive";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Collection = () => {
  const [current, setCurrent] = useState();
  const [products, setProducts] = useState();
  const { isMobile } = useResponsive();
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
      setCurrent(products[0]);
    };
    fetchProducts();
  }, []);

  if (!products) {
    return null;
  }

  return (
    <div>
      <div>
        <div className="lg:hidden">
          <div className="lg:fixed lg:w-1/2">
            <div className="px-2.5 text-[26px] text-glow-10 uppercase lg:absolute lg:left-0 lg:top-0 lg:px-0">
              {current.title}
            </div>
            <div className="mt-10 mx-8 h-[calc(100vh_-_240px_-_100px_-_120px)] relative">
              <Image src={current.cover} alt={current.title} fill />
            </div>
          </div>
        </div>
        <div className="mt-5 lg:mt-0 lg:px-10">
          <div className="px-2.5 text-[26px] text-glow-10 uppercase lg:hidden">Collection</div>
          <div className="mt-5 flex gap-4 overflow-x-scroll overflow-y-hidden px-1.5 hide-scrollbar lg:grid lg:grid-cols-4 lg:gap-x-5 lg:gap-y-20 lg:relative">
            {products?.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-1 lg:gap-0 cursor-pointer relative aspect-[1.5/3] min-[1800px]:aspect-[1.8/3]"
                onClick={() => isMobile ? setCurrent(item) : router.push(`/collection/${item.slug}`)}
              >
                <div className="min-w-[80px] lg:w-full h-full flex items-center relative">
                  <Image fill src={item.cover} alt={item.title} className="object-contain" />
                </div>
                <div className={clsx(
                  "mt-auto whitespace-nowrap text-xs lg:text-2xl lg:text-glow-15 lg:pt-5 lg:whitespace-normal",
                  item.slug === current.slug && "underline"
                )}>
                  {item.title}
                </div>
              </div>
            ))}
            <div className="lg:absolute col-start-2 -ml-[22px] h-full">
              <img src="/grid-col-1.png" alt="" className="h-full w-[18px]" />
            </div>
            <div className="lg:absolute col-start-3 -ml-[22px] h-full">
              <img src="/grid-col-2.png" alt="" className="h-full w-[18px]" />
            </div>
            <div className="lg:absolute col-start-4 -ml-[22px] h-full">
              <img src="/grid-col-1.png" alt="" className="h-full w-[18px]" />
            </div>
            {Array(products.length % 4 === 0 ? (products.length / 4 - 1) : Math.floor(products.length / 4))
              .fill(1)
              .map((item, index) => (
                <div
                  key={index}
                  className="lg:absolute w-full -mt-[50px]"
                  style={{ gridRowStart: index + 2 }}
                >
                  <img src={index % 2 === 0 ? "/grid-row-1.png" : "/grid-row-2.png"} alt="" className="w-full h-5" />
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="lg:hidden mt-10 px-2.5">
        <div className="text-[26px] text-glow-10 uppercase">Product Details</div>
        <div className="text-xl text-glow-10">
          {current.description}
        </div>
        <img src={current.model_photo} alt="" />
        <img src={current.details_photo} alt="" />
      </div>
      <ContactTheManager className="mt-[60px] lg:hidden" />
    </div>
  );
};

export default Collection;