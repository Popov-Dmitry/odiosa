"use client";

import React from "react";
import useResponsive from "@/hooks/use-responsive";
import Image from "next/image";
import clsx from "clsx";

const Input = ({ value, onChange, placeholder, disabled, className }) => {
  const { isMobile } = useResponsive();

  return (
    <div className={className}>
      <input
        className={clsx("w-full outline-0 placeholder:opacity-100", isMobile ? "text-xl text-center" : "text-2xl")}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
      />
      <div className={clsx("relative w-full mt-2.5", isMobile ? "h-[9px]" : "h-1.5")}>
        <Image src={isMobile ? "/input-mobile.png" : "/input-desktop.png"} alt="" fill />
      </div>
    </div>
  );
};

export default Input;