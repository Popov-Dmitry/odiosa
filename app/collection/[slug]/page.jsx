"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "@/components/button";

const ProductCard = () => {
  const [color, setColor] = useState("orange");
  const [size, setSize] = useState("M");

  return (
    <div>
      <div className="lg:hidden">
        <div className="px-2.5">
          <div className="flex items-center justify-between gap-2.5 text-[26px] uppercase text-glow-15">
            <div>Dissolutio Vitis Solis</div>
            <div>$370</div>
          </div>
          <div className="text-xl text-glow-10">
            Material: Cotton
          </div>
          <div className="mt-5">
            <img src="/mock/3d.png" alt="" />
          </div>
          <div className="mt-10 text-xl text-glow-10">
            High-waisted structured trousers with architectural pleating and asymmetric draping.
            <br /><br />
            The double waistband with buttoned closure ensures a secure fit, while decorative topstitching reinforces
            sculptural folds along the leg. Engineered pleats and tapered construction create a dynamic silhouette.
          </div>
        </div>
        <div className="ml-[9px] mr-3.5 relative">
          <img src="/mock/details-top-mobile.png" alt="" />
          <div
            className="text-base text-glow-10 absolute bottom-[100px] right-0 w-1/2 flex flex-col gap-[45px] items-end">
            <div className="w-[118px]">
              The dyeing process is ensuring depth of color, oxidation, and organic evolution.
            </div>
            <div>Need description for buttons</div>
          </div>
        </div>
        <div className="-mt-56 ml-[9px] mr-3.5">
          <img src="/mock/details-bottom-mobile.png" alt="" />
        </div>
        <div className="mt-9 ml-[15px] mr-3.5">
          <img src="/mock/model-top-mobile.png" alt="" />
        </div>
        <div className="mt-[60px] ml-[15px] mr-8">
          <img src="/mock/model-bottom-mobile.png" alt="" />
        </div>
      </div>
      <div className="hidden lg:block pt-[30px]">
        <div className="grid grid-cols-2 gap-5 px-10 h-[calc(100vh_-_60px_-_96px)]">
          <div className="flex flex-col justify-between">
            <div>
              <div className="text-[54px] text-glow-30 uppercase">Laminata Ajoura</div>
              <div className="text-[44px] text-glow-25 mt-16">
                High-waisted structured trousers with architectural pleating and asymmetric draping. The double
                waistband with buttoned closure ensures a secure fit, while decorative topstitching reinforces
                sculptural folds along the leg. Engineered pleats and tapered construction create a dynamic silhouette.
              </div>
            </div>
            <div>
              <div className="text-[44px] text-glow-30 text-right">
                Material: Cotton
              </div>
              <div className="mt-5 grid grid-rows-2 grid-flow-col items-center w-fit text-[44px] text-glow-30">
                <div className="mr-2">Color:</div>
                <div>Size:</div>
                <div
                  className="relative w-[55px] h-[53px] flex items-center justify-center cursor-pointer"
                  onClick={() => setColor("orange")}
                >
                  {color === "orange" && (
                    <Image src="/select-color.svg" alt="" width={55} height={53} className="absolute right-0.5" />
                  )}
                  <Image src="/colors/orange.svg" alt="orange" width={28} height={30} />
                </div>
                <div
                  className="relative w-[44px] h-[47px] flex items-center justify-center cursor-pointer"
                  onClick={() => setSize("S")}
                >
                  {size === "S" && (
                    <Image src="/select-size.svg" alt="" width={44} height={47} className="absolute right-0.5" />
                  )}
                  S
                </div>
                <div
                  className="relative w-[55px] h-[53px] flex items-center justify-center cursor-pointer"
                  onClick={() => setColor("black")}
                >
                  {color === "black" && (
                    <Image src="/select-color.svg" alt="" width={55} height={53} className="absolute" />
                  )}
                  <Image src="/colors/black.svg" alt="black" width={28} height={30} />
                </div>
                <div
                  className="relative w-[44px] h-[47px] flex items-center justify-center cursor-pointer"
                  onClick={() => setSize("M")}
                >
                  {size === "M" && (
                    <Image src="/select-size.svg" alt="" width={44} height={47} className="absolute" />
                  )}
                  M
                </div>
                <div />
                <div
                  className="relative w-[44px] h-[47px] flex items-center justify-center cursor-pointer"
                  onClick={() => setSize("L")}
                >
                  {size === "L" && (
                    <Image src="/select-size.svg" alt="" width={44} height={47} className="absolute" />
                  )}
                  L
                </div>
              </div>
              <Button variant="outlined" text="ORDER" className="mt-[60px]" />
            </div>
          </div>
          <div className="relative flex justify-end">
            <img src="/mock/3d.png" alt="" className="absolute h-full" />
            <div className="text-[54px] text-glow-30">370$</div>
          </div>
        </div>
        <div className="mt-32 px-10">
          <img src="/mock/model.png" alt="" />
        </div>
        <div className="mt-20 pl-10 relative">
          <div className="absolute top-11 text-[54px] text-glow-30">Details</div>
          <img src="/mock/details.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;