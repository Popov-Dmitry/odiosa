import React from "react";
import Image from "next/image";
import clsx from "clsx";

const Button = ({ variant = "primary", text, onClick, className, imageClassName }) => {
  return (
    <button className={clsx("w-full cursor-pointer h-[74px] lg:h-[130px] text-[26px] lg:text-[54px]", className)} onClick={onClick}>
      <div className={clsx("relative w-full h-[74px] lg:h-[130px] flex items-center justify-center", imageClassName)}>
        <Image src={`/button-${variant}.png`} alt="" fill />
        <div className="z-10 text-[#E9E9E3]">{text}</div>
      </div>
    </button>
  );
};

export default Button;