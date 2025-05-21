"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import useResponsive from "@/hooks/use-responsive";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Options = ({ colors, sizes, defaultColor, defaultSize, className }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { isMobile } = useResponsive();
  const [color, setColor] = useState(defaultColor || colors[0]);
  const [size, setSize] = useState(defaultSize || sizes[0]);

  const createQueryString = useCallback(
    (params) => {
      const query = new URLSearchParams(searchParams.toString());

      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          query.set(key, value);
        }
      });

      return query.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    setColor(searchParams.get("color") || defaultColor || colors[0]);
    setSize(searchParams.get("size") || defaultSize || sizes[0]);
  }, [searchParams]);

  if (!colors?.length && !sizes?.length) {
    return null;
  }

  return (
    <div className={clsx(
      "grid grid-flow-col items-center w-fit text-xl lg:text-[44px] text-glow-10 lg:text-glow-30",
      colors?.length > 0 && sizes?.length > 0 ? "grid-rows-2" : "grid-rows-1",
      className
    )}>
      {colors?.length > 0 && <div className="mr-2">Color:</div>}
      {sizes?.length > 0 && <div className="mr-2">Size:</div>}
      {Array(Math.max((colors?.length || 0), (sizes?.length || 0))).fill(1).map((_, i) => (
        <React.Fragment key={i}>
          {i in colors ? (
            <div
              className="relative w-[40px] h-[42px] lg:w-[55px] lg:h-[53px] flex items-center justify-center cursor-pointer"
              onClick={() => router.push(`${pathname}?${createQueryString({ color: colors[i], size })}`)}
            >
              {color === colors[i] && (
                <Image src="/select-color.svg" alt="" fill className="-ml-0.5" />
              )}
              <svg
                width={isMobile ? 26 : 34}
                height={isMobile ? 28 : 36}
                viewBox="0 0 41 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_g_3644_6)">
                  <path
                    d="M34 34.3237C33.2309 34.3237 25.5392 37.0753 25.5392 36.7242C25.5392 36.3501 28.2228 33.9811 28.5609 33.669C29.3973 32.8972 29.8706 31.9032 30.5841 31.1716C31.0659 30.6776 32.4098 28.7242 33.0541 28.6499C34.3149 28.5044 32.4787 29.8446 32.1081 30.6139C31.4485 31.9835 29.5721 33.715 28.0879 34.3237C27.2054 34.6856 24.8281 35.2463 24.1728 35.73C23.8066 36.0004 21.8118 36.8489 21.335 36.409C20.7315 35.852 23.4519 33.5826 23.8312 33.2326C26.2064 31.0408 28.9815 29.1297 30.5841 26.4676C31.0826 25.6397 31.9909 24.278 32.1081 23.4125C32.1517 23.0909 34.0785 20.4201 32.8439 21.8849C30.9224 24.1646 29.6725 25.8918 26.9055 27.2435C25.3717 27.9929 24.2326 28.8647 22.5437 29.4258C21.5915 29.7421 18.9885 30.3624 18.3921 31.0503C17.1952 32.4309 14.6276 32.7542 13.2946 33.9842C12.2782 34.9222 14.755 31.6234 15.0814 31.1716C16.1888 29.6388 17.8966 28.2257 18.8651 26.6616C20.7392 23.6352 24.7204 21.5008 27.3785 19.048C28.9688 17.5805 30.7229 15.4443 32.3446 14.2471C33.5731 13.3402 33.1232 13.207 32.5811 14.7078C32.005 16.3027 30.8797 17.3356 29.2703 18.0781C26.8183 19.2095 24.283 20.8535 21.9131 22.1032C19.3767 23.4406 15.3475 25.3102 13.4523 27.5588C11.9177 29.3794 10.0713 31.1573 8.35475 32.9174C5.39818 35.9488 9.27179 30.5193 10.1152 29.741C12.5331 27.5098 14.5919 24.8663 16.9732 22.5396C19.0012 20.5581 21.6684 17.7096 23.1218 15.3624C23.9464 14.0309 26.9334 10.5214 28.7974 10.319C29.7196 10.2189 30.8781 9.35429 29.2703 10.7555C28.008 11.8557 26.6054 12.5955 25.2501 13.5682C20.7954 16.7655 15.5599 19.4677 10.5619 22.1032C8.88476 22.9875 4.58379 25.6217 8.93282 23.5095C11.501 22.2622 13.4325 19.8665 14.8449 17.5204C16.1439 15.3628 15.3202 12.551 16.3952 10.319C16.9234 9.22236 16.777 8.1239 17.8141 7.16692C19.0117 6.06174 19.3381 8.86873 19.3381 9.66437C19.3381 11.8541 15.6936 16.1027 13.6625 17.2052C12.5525 17.8078 11.6949 17.7387 10.3517 17.7387C8.19157 17.7387 8.45985 17.2705 8.45985 15.3624C8.45985 12.9702 11.62 11.3722 11.7706 9.0097C11.8848 7.21862 12.6395 6.82746 10.3517 6.82746C9.52181 6.82746 6.62303 6.49259 7.04096 7.26391"
                    style={{ stroke: `#${colors[i]}` }}
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_g_3644_6"
                    x="0.5"
                    y="0.255127"
                    width="40"
                    height="43.0001"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feTurbulence type="fractalNoise" baseFrequency="2 2" numOctaves="3" seed="273" />
                    <feDisplacementMap
                      in="shape"
                      scale="8"
                      xChannelSelector="R"
                      yChannelSelector="G"
                      result="displacedImage"
                      width="100%"
                      height="100%"
                    />
                    <feMerge result="effect1_texture_3644_6">
                      <feMergeNode in="displacedImage" />
                    </feMerge>
                  </filter>
                </defs>
              </svg>
            </div>
          ) : <div />}
          {i in sizes ? (
            <div
              className="relative w-[40px] h-[38px] lg:w-[51px] lg:h-[49px] flex items-center justify-center cursor-pointer uppercase"
              onClick={() => router.push(`${pathname}?${createQueryString({ color, size: sizes[i] })}`)}
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