import React from "react";
import Image from "next/image";
import Button from "@/components/button";
import Input from "@/components/input";
import Options from "@/components/options";
import ModelViewer from "@/components/model-viewer";

const colors = ["orange", "black"];
const sizes = ["s", "m", "l"];

const ProductCard = () => {
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
          <div className="mt-5 h-96">
            <ModelViewer model="papa-pas.glb" />
          </div>
          <Options colors={colors} sizes={sizes} defaultSize="m" className="mt-10" />
          <Button variant="outlined" text="ORDER" className="mt-8" />
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
              <Options colors={colors} sizes={sizes} defaultSize="m" className="mt-5" />
              <Button variant="outlined" text="ORDER" className="mt-[60px]" />
            </div>
          </div>
          <div className="relative flex justify-end h-full">
            <ModelViewer model="papa-pas.glb" />
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
      <div className="mt-[60px] lg:mt-0">
        <div className="relative w-full h-4 lg:h-8">
          <Image src="/contact-line-mobile.webp" alt="" fill className="lg:hidden" />
          <Image src="/contact-line-1.webp" alt="" fill className="hidden lg:block" />
        </div>
        <div className="pl-2 pr-[11px] lg:px-8 lg:py-10 lg:flex lg:flex-col lg:items-center">
          <div className="uppercase text-[26px] text-glow-10 lg:text-[54px] lg:text-glow-25">
            Contact the manager
          </div>
          <div className="mt-[60px] text-xl text-glow-10 lg:mt-20 lg:text-[44px] lg:text-glow-25 lg:text-center lg:max-w-[1528px]">
            Each item is handmade to order, tailored to the unique features of your body.
            <br /><br />
            Or you can contact the manager to clarify the details and send the data to him, and we will fit the clothes to you.
          </div>
          <div className="mt-10 flex flex-col gap-5 lg:mt-[165px] lg:gap-8 lg:w-[910px]">
            <Input variant="mobile" placeholder="Name" textCenter inputClassName="lg:text-[44px]" />
            <Input variant="mobile" placeholder="Email" textCenter inputClassName="lg:text-[44px]" />
          </div>
          <Button text="Contact the manager" className="mt-10 lg:hidden" />
          <Button text="submit" className="hidden lg:block mt-10 !w-[910px]" />
        </div>
        <div className="hidden lg:block relative w-full h-8">
          <Image src="/contact-line-2.webp" alt="" fill />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;