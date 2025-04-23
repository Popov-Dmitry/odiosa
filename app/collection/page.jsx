"use client";

import React, { useState } from "react";
import ModelViewer from "@/components/model-viewer";
import ContactTheManager from "@/components/contact-the-manager";
import clsx from "clsx";

const collection = [
  {
    id: 1,
    title: "Dissolutio Vitis Solis",
    src: "/mock/collection/fresca-calcaria-mobile.png"
  },
  {
    id: 2,
    title: "Black R-Wide Dress",
    src: "/mock/collection/catenaria-spinosa-mobile.png"
  },
  {
    id: 3,
    title: "White Seam Jacket",
    src: "/mock/collection/catocala-kotshubeji-mobile.png"
  },
  {
    id: 4,
    title: "White Seam Jacket",
    src: "/mock/collection/aeronautica-aeronis-mobile.png"
  },
  {
    id: 5,
    title: "Dissolutio Vitis Solis",
    src: "/mock/collection/fresca-calcaria-mobile.png"
  },
  {
    id: 6,
    title: "Black R-Wide Dress",
    src: "/mock/collection/catenaria-spinosa-mobile.png"
  },
  {
    id: 7,
    title: "White Seam Jacket",
    src: "/mock/collection/catocala-kotshubeji-mobile.png"
  },
  {
    id: 8,
    title: "White Seam Jacket",
    src: "/mock/collection/aeronautica-aeronis-mobile.png"
  },
  {
    id: 9,
    title: "Dissolutio Vitis Solis",
    src: "/mock/collection/fresca-calcaria-mobile.png"
  },
  {
    id: 10,
    title: "Black R-Wide Dress",
    src: "/mock/collection/catenaria-spinosa-mobile.png"
  },
  {
    id: 11,
    title: "White Seam Jacket",
    src: "/mock/collection/catocala-kotshubeji-mobile.png"
  },
  {
    id: 12,
    title: "White Seam Jacket",
    src: "/mock/collection/aeronautica-aeronis-mobile.png"
  }
];

const Collection = () => {
  const [current, setCurrent] = useState(collection[0]);

  return (
    <div>
      <div className="lg:grid lg:grid-cols-2 lg:px-10">
        <div>
          <div className="lg:fixed lg:w-1/2">
            <div className="px-2.5 text-[26px] text-glow-10 uppercase lg:absolute lg:left-0 lg:top-0 lg:px-0">
              Dissolutio Vitis Solis
            </div>
            <div className="mt-10 mx-8 h-[calc(100vh_-_240px_-_100px_-_80px)] lg:h-[calc(100vh_-_240px_-_96px)]">
              <ModelViewer model="papa-pas.glb" />
            </div>
          </div>
        </div>
        <div className="mt-5 lg:mt-0">
          <div className="px-2.5 text-[26px] text-glow-10 uppercase lg:hidden">Collection</div>
          <div
            className="mt-5 flex gap-4 overflow-x-scroll overflow-y-hidden px-1.5 hide-scrollbar lg:grid lg:grid-cols-3 lg:gap-x-5 lg:gap-y-20 lg:relative">
            {collection.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center cursor-pointer"
                onClick={() => setCurrent(item)}
              >
                <div className="aspect-[2/3] w-fit flex items-center">
                  <img src={item.src} alt={item.title} />
                </div>
                <div className={clsx(
                  "mt-auto whitespace-nowrap text-xs lg:text-2xl lg:text-glow-15 lg:pt-5 lg:whitespace-normal",
                  item.id === current.id && "underline"
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
            {Array(collection.length % 3 === 0 ? (collection.length / 3 - 1) : Math.floor(collection.length / 3))
              .fill(1)
              .map((item, index) => (
                <div className="lg:absolute w-full -mt-[50px]" style={{ gridRowStart: index + 2 }}>
                  <img src={index % 2 === 0 ? "/grid-row-1.png" : "/grid-row-2.png"} alt="" className="w-full h-5" />
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