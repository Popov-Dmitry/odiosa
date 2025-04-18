"use client";

import React, { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

const Options = ({ colors, sizes, defaultColor, defaultSize, className }) => {
  const [color, setColor] = useState(defaultColor || colors[0]);
  const [size, setSize] = useState(defaultSize || sizes[0]);

  return (
    <div className={clsx("grid grid-rows-2 grid-flow-col items-center w-fit text-[44px] text-glow-30", className)}>
      <div className="mr-2">Color:</div>
      <div>Size:</div>
      {Array(Math.max(colors.length, sizes.length)).fill(1).map((_, i) => (
        <React.Fragment key={i}>
          {i in colors ? (
            <div
              className="relative w-[55px] h-[53px] flex items-center justify-center cursor-pointer"
              onClick={() => setColor(colors[i])}
            >
              {color === colors[i] && (
                <Image src="/select-color.svg" alt="" width={55} height={53} className="absolute right-0.5" />
              )}
              <Image src={`/colors/${colors[i]}.svg`} alt={colors[i]} width={28} height={30} />
            </div>
          ) : <div />}
          {i in sizes ? (
            <div
              className="relative w-[51px] h-[49px] flex items-center justify-center cursor-pointer uppercase"
              onClick={() => setSize(sizes[i])}
            >
              {size === sizes[i] && (
                <Image src="/select-size.svg" alt="" width={51} height={49} className="absolute" />
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