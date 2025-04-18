"use client";

import React, { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import useResponsive from "@/hooks/use-responsive";

const Options = ({ colors, sizes, defaultColor, defaultSize, className }) => {
  const [color, setColor] = useState(defaultColor || colors[0]);
  const [size, setSize] = useState(defaultSize || sizes[0]);
  const { isMobile } = useResponsive();

  return (
    <div className={clsx(
      "grid grid-rows-2 grid-flow-col items-center w-fit text-xl lg:text-[44px] text-glow-10 lg:text-glow-30",
      className
    )}>
      <div className="mr-2">Color:</div>
      <div>Size:</div>
      {Array(Math.max(colors.length, sizes.length)).fill(1).map((_, i) => (
        <React.Fragment key={i}>
          {i in colors ? (
            <div
              className="relative w-[40px] h-[42px] lg:w-[55px] lg:h-[53px] flex items-center justify-center cursor-pointer"
              onClick={() => setColor(colors[i])}
            >
              {color === colors[i] && (
                <Image src="/select-color.svg" alt="" fill className="-ml-0.5" />
              )}
              <Image src={`/colors/${colors[i]}.svg`} alt={colors[i]} width={isMobile ? 20 : 28} height={isMobile ? 22 : 30} />
            </div>
          ) : <div />}
          {i in sizes ? (
            <div
              className="relative w-[40px] h-[38px] lg:w-[51px] lg:h-[49px] flex items-center justify-center cursor-pointer uppercase"
              onClick={() => setSize(sizes[i])}
            >
              {size === sizes[i] && (
                <Image src="/select-size.svg" alt="" fill />
              )}
              {sizes[i]}
            </div>
          ) : <div />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Options;