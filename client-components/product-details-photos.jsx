"use client";

import React from "react";
import useResponsive from "@/hooks/use-responsive";
import clsx from "clsx";

const ProductDetailsPhotos = ({ product }) => {
  const { isMobile } = useResponsive();

  if (isMobile) {
    return (
      <>
        {product?.mobile_photos?.map((photo, index) => (
          <div
            key={photo}
            className={clsx("ml-[15px] mr-3.5", index > 0 && "mt-9")}
          >
            <img src={photo} alt="" />
          </div>
        ))}
      </>
    );
  }

  return (
    <>
      {product?.model_photo && (
        <div className="mt-32 px-10 flex justify-center">
          <img src={product.model_photo} alt="" />
        </div>
      )}
      {product?.details_photo && (
        <div className="mt-20 pl-10">
          <div className="text-[54px] text-glow-30">Details</div>
          <div className="flex justify-center">
            <img src={product.details_photo} alt="" />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetailsPhotos;