import React from "react";
import Image from "next/image";
import Button from "@/components/button";
import Input from "@/components/input";
import Options from "@/components/options";
import ModelViewer from "@/components/model-viewer";
import ContactTheManager from "@/components/contact-the-manager";

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
            <ModelViewer model="papa-pas.glb" device="mobile" />
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
        <img src="/mock/details-mobile.webp" alt="" className="pl-[9px] pr-3.5" />
        <div className="mt-9 ml-[15px] mr-3.5">
          <img src="/mock/model-top-mobile.png" alt="" />
        </div>
        <div className="mt-[60px] ml-[15px] mr-8">
          <img src="/mock/model-bottom-mobile.png" alt="" />
        </div>
      </div>
      <div className="hidden lg:block pt-[30px]">
        <div className="grid grid-cols-2 gap-5 px-10 min-h-[calc(100vh_-_60px_-_96px)]">
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
          <div className="relative flex justify-end h-[calc(100vh_-_60px_-_96px)]">
            <ModelViewer model="papa-pas.glb" device="desktop" />
            <div className="text-[54px] text-glow-30 absolute">370$</div>
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
      <ContactTheManager className="mt-[60px] lg:mt-0" />
    </div>
  );
};

export default ProductCard;