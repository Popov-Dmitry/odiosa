import React from "react";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";

const Button = ({ variant = "primary", text, onClick, className, imageClassName, href, disabled }) => {
  if (href) {
    return (
      <Link
        className={clsx(
          "w-full h-[74px] !no-underline lg:h-[130px] text-[26px] lg:text-[54px] group",
          disabled ? "cursor-not-allowed" : "cursor-pointer",
          className
        )}
        href={href}
      >
        <div className={clsx("relative w-full h-[74px] lg:h-[130px] flex items-center justify-center", imageClassName)}>
          <Image
            src={`/button-${variant}.webp`}
            alt=""
            fill
            className={clsx(variant === "outlined" && "group-hover:opacity-0")}
          />
          {variant === "outlined" && (
            <Image
              src="/button-primary.webp"
              alt=""
              fill
              className="opacity-0 group-hover:opacity-100"
            />
          )}
          <div
            className={clsx(
              "z-10 uppercase duration-100",
              variant === "outlined" ? "text-[#575757] text-glow-20 group-hover:text-[#E9E9E3]" : "text-[#E9E9E3]"
            )}
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
      className={clsx(
        "w-full h-[74px] lg:h-[130px] text-[26px] lg:text-[54px] group",
        disabled ? "cursor-not-allowed" : "cursor-pointer",
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <div className={clsx("relative w-full h-[74px] lg:h-[130px] flex items-center justify-center", imageClassName)}>
        <Image
          src={`/button-${variant}.webp`}
          alt=""
          fill
          className={clsx(
            "duration-100",
            disabled && "opacity-75",
            variant === "outlined" && "group-hover:opacity-0"
          )}
        />
        {variant === "outlined" && (
          <Image src="/button-primary.webp" alt="" fill className={"duration-100 opacity-0 group-hover:opacity-100"} />
        )}
        <div
          className={clsx(
            "z-10 uppercase duration-100",
            variant === "outlined" ? "text-[#575757] text-glow-20 group-hover:text-[#E9E9E3]" : "text-[#E9E9E3]"
          )}
          style={{ WebkitTextStroke: variant === "outlined" ? undefined : "4px #FFFFFF2E" }}
        >
          {text}
        </div>
      </div>
    </button>
  );
};

export default Button;