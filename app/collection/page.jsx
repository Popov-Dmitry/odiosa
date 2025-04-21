"use client";

import React from "react";
import ModelViewer from "@/components/model-viewer";
import ContactTheManager from "@/components/contact-the-manager";

const mobileCollection = [
  {
    title: "Dissolutio Vitis Solis",
    src: "/mock/collection/fresca-calcaria-mobile.png"
  },
  {
    title: "Black R-Wide Dress",
    src: "/mock/collection/catenaria-spinosa-mobile.png"
  },
  {
    title: "White Seam Jacket",
    src: "/mock/collection/catocala-kotshubeji-mobile.png"
  },
  {
    title: "White Seam Jacket",
    src: "/mock/collection/aeronautica-aeronis-mobile.png"
  }
];

const Collection = () => {
  return (
    <div>
      <div>
        <div className="relative">
          <div className="lg:absolute lg:left-0 lg:top-0 px-2.5 text-[26px] text-glow-10 uppercase">
            Dissolutio Vitis Solis
          </div>
          <div className="mt-10 lg:mt-0 mx-8">
            <ModelViewer model="model.glb" />
          </div>
        </div>
        <div className="mt-5">
          <div className="px-2.5 text-[26px] text-glow-10 uppercase">Collection</div>
          <div className="mt-5 flex gap-4 overflow-x-scroll overflow-y-hidden px-1.5 hide-scrollbar">
            {mobileCollection.map((item) => (
              <div key={item.src} className="flex flex-col items-center">
                <div className="aspect-[2/3] w-fit flex items-center">
                  <img src={item.src} alt={item.title} />
                </div>
                <div className="mt-auto whitespace-nowrap text-xs">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:hidden mt-10 px-2.5">
        <div className="text-[26px] text-glow-10 uppercase">Product Details</div>
        <div className="text-xl text-glow-10">
          High-waisted structured trousers with architectural pleating and asymmetric draping.
          <br /><br />
          The double waistband with buttoned closure ensures a secure fit, while decorative topstitching reinforces
          sculptural folds along the leg. Engineered pleats and tapered construction create a dynamic silhouette.
        </div>
        <img src="/mock/details-mobile.webp" alt="" />
        <img src="/mock/model-top-mobile.png" alt="" />
        <img src="/mock/model-bottom-mobile.png" alt="" className="mt-[60px]" />
      </div>
      <ContactTheManager className="mt-[60px] lg:hidden" />
    </div>
  );
};

export default Collection;