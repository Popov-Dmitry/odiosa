"use client";

import React from "react";
import useResponsive from "@/hooks/use-responsive";
import Image from "next/image";
import clsx from "clsx";

const Input = ({
  variant,
  value,
  onChange,
  placeholder,
  disabled,
  textCenter,
  className,
  inputClassName,
  type
}) => {
  const { isMobile } = useResponsive();

  return (
    <div className={className}>
      <input
        className={clsx(
          "w-full outline-0 placeholder:opacity-100",
          isMobile ? "text-xl" : "text-2xl",
          (isMobile || textCenter) && "text-center",
          inputClassName
        )}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        type={type}
      />
      <div className={clsx("relative w-full mt-2.5", isMobile ? "h-[9px]" : "h-1.5")}>
        <Image src={variant ? `/input-${variant}.webp` : isMobile ? "/input-mobile.webp" : "/input-desktop.webp"} alt="" fill />
      </div>
    </div>
  );
};

export default Input;