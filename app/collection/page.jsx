import React from "react";
import Image from "next/image";
import Spinner from "@/components/spinner";
import Link from "next/link";
import { getProducts } from "@/utils/db-requests-server";

export async function generateMetadata() {
  return {
    title: "Odiosa – Collection",
    description: "Odiosa – Collection",
    openGraph: {
      title: "Odiosa – Collection",
      url: "https://odiosa.eu/collection"
    }
  };
}

const Collection = async () => {
  const products = await getProducts();

  if (!products) {
    return <Spinner />;
  }

  return (
    <div>
      <div>
        <div className="mt-5 lg:mt-0 lg:px-10">
          <div className="px-2.5 text-[26px] text-glow-10 uppercase lg:hidden">Collection</div>
          <div className="mt-5 px-1.5 grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-20 lg:relative">
            {products?.map((item, index) => (
              <Link
                key={index}
                className="group flex flex-col items-center gap-1 lg:gap-0 cursor-pointer relative aspect-[1.5/3] min-[1800px]:aspect-[1.8/3]"
                href={`/collection/${item.slug}`}
              >
                <div className="w-full h-full flex items-center relative">
                  <Image
                    fill
                    src={item.cover}
                    alt={item.title}
                    className="object-contain duration-200 group-hover:opacity-0"
                  />
                  <Image
                    fill
                    src={item.cover_inner}
                    alt={item.title}
                    className="object-contain duration-200 opacity-0 group-hover:opacity-100"
                  />
                </div>
                <div
                  className="mt-auto whitespace-nowrap text-xs lg:text-2xl lg:text-glow-15 lg:pt-5 lg:whitespace-normal">
                  {item.title}
                </div>
              </Link>
            ))}
            <div className="hidden lg:block absolute col-start-2 -ml-[22px] h-full">
              <img src="/grid-col-1.png" alt="" className="h-full w-[18px]" />
            </div>
            <div className="hidden lg:block absolute col-start-3 -ml-[22px] h-full">
              <img src="/grid-col-2.png" alt="" className="h-full w-[18px]" />
            </div>
            <div className="hidden lg:block absolute col-start-4 -ml-[22px] h-full">
              <img src="/grid-col-1.png" alt="" className="h-full w-[18px]" />
            </div>
            {Array(products.length % 4 === 0 ? (products.length / 4 - 1) : Math.floor(products.length / 4))
              .fill(1)
              .map((item, index) => (
                <div
                  key={index}
                  className="hidden lg:block absolute w-full -mt-[50px]"
                  style={{ gridRowStart: index + 2 }}
                >
                  <img src={index % 2 === 0 ? "/grid-row-1.png" : "/grid-row-2.png"} alt="" className="w-full h-5" />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;