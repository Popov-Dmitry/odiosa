import React from "react";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";

const Button = ({ variant = "primary", text, onClick, className, imageClassName, href }) => {
  if (href) {
    return (
      <Link
        className={clsx("w-full cursor-pointer h-[74px] !no-underline lg:h-[130px] text-[26px] lg:text-[54px]", className)}
        href={href}
      >
        <div className={clsx("relative w-full h-[74px] lg:h-[130px] flex items-center justify-center", imageClassName)}>
          <Image src={`/button-${variant}.webp`} alt="" fill />
          <div
            className={clsx("z-10 uppercase", variant === "outlined" ? "text-[#575757] text-glow-20" : "text-[#E9E9E3]")}
            style={{ WebkitTextStroke: variant === "outlined" ? undefined : "4px #FFFFFF2E" }}
          >
            {text}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <button
      className={clsx("w-full cursor-pointer h-[74px] lg:h-[130px] text-[26px] lg:text-[54px]", className)}
      onClick={onClick}
    >
      <div className={clsx("relative w-full h-[74px] lg:h-[130px] flex items-center justify-center", imageClassName)}>
        <Image src={`/button-${variant}.webp`} alt="" fill />
        <div
          className={clsx("z-10 uppercase", variant === "outlined" ? "text-[#575757] text-glow-20" : "text-[#E9E9E3]")}
          style={{ WebkitTextStroke: variant === "outlined" ? undefined : "4px #FFFFFF2E" }}
        >
          {text}
        </div>
      </div>
    </button>
  );
};

export default Button;