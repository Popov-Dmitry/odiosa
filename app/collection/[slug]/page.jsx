import React from "react";

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
          <div className="text-base text-glow-10 absolute bottom-[100px] right-0 w-1/2 flex flex-col gap-[45px] items-end">
            <div className="w-[118px]">
              The dyeing process is  ensuring depth of color, oxidation, and organic evolution.
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
    </div>
  );
};

export default ProductCard;