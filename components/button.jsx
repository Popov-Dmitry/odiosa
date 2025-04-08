import React from "react";
import Image from "next/image";
import clsx from "clsx";

const Button = ({ variant = "primary", text, onClick, className }) => {
  return (
    <button className={clsx("w-full", className)} onClick={onClick}>
      <div className="relative w-full h-[74px] lg:h-[130px] flex items-center justify-center">
        <Image src={`/button-${variant}.png`} alt="" fill />
        <div className="z-10 text-[26px] lg:text-[54px] text-[#E9E9E3]">{text}</div>
      </div>
    </button>
  );
};

export default Button;