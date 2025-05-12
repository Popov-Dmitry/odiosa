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
        query.set(key, value);
      });

      return query.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    setColor(searchParams.get("color") || defaultColor || colors[0]);
    setSize(searchParams.get("size") || defaultSize || sizes[0]);
  }, [searchParams]);

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
              onClick={() => router.push(`${pathname}?${createQueryString({ color: colors[i], size })}`)}
            >
              {color === colors[i] && (
                <Image src="/select-color.svg" alt="" fill className="-ml-0.5" />
              )}
              <svg
                width={isMobile ? 20 : 28}
                height={isMobile ? 22 : 30}
                viewBox="0 0 33 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30 30.5686C29.2309 30.5686 21.5392 33.3202 21.5392 32.969C21.5392 32.595 24.2228 30.2259 24.5609 29.9139C25.3973 29.142 25.8706 28.1481 26.5841 27.4165C27.0659 26.9225 28.4098 24.9691 29.0541 24.8947C30.3149 24.7493 28.4787 26.0895 28.1081 26.8588C27.4485 28.2284 25.5721 29.9599 24.0879 30.5686C23.2054 30.9305 20.8281 31.4912 20.1728 31.9749C19.8066 32.2453 17.8118 33.0938 17.335 32.6538C16.7315 32.0969 19.4519 29.8275 19.8312 29.4775C22.2064 27.2857 24.9815 25.3746 26.5841 22.7125C27.0826 21.8846 27.9909 20.5229 28.1081 19.6574C28.1517 19.3357 30.0785 16.665 28.8439 18.1298C26.9224 20.4095 25.6725 22.1366 22.9055 23.4884C21.3717 24.2378 20.2326 25.1096 18.5437 25.6707C17.5915 25.987 14.9885 26.6073 14.3921 27.2952C13.1952 28.6758 10.6276 28.9991 9.29462 30.2291C8.27823 31.167 10.755 27.8683 11.0814 27.4165C12.1888 25.8836 13.8966 24.4705 14.8651 22.9065C16.7392 19.88 20.7204 17.7457 23.3785 15.2929C24.9688 13.8253 26.7229 11.6891 28.3446 10.492C29.5731 9.58503 29.1232 9.45183 28.5811 10.9526C28.005 12.5475 26.8797 13.5804 25.2703 14.323C22.8183 15.4544 20.283 17.0984 17.9131 18.348C15.3767 19.6855 11.3475 21.555 9.45227 23.8036C7.91769 25.6243 6.07132 27.4022 4.35475 29.1622C1.39818 32.1937 5.27179 26.7642 6.11524 25.9859C8.5331 23.7547 10.5919 21.1112 12.9732 18.7845C15.0012 16.803 17.6684 13.9544 19.1218 11.6073C19.9464 10.2757 22.9334 6.76628 24.7974 6.56392C25.7196 6.4638 26.8781 5.59916 25.2703 7.00037C24.008 8.10057 22.6054 8.84036 21.2501 9.81303C16.7954 13.0103 11.5599 15.7125 6.56193 18.348C4.88476 19.2324 0.583785 21.8666 4.93282 19.7544C7.50095 18.5071 9.43246 16.1114 10.8449 13.7653C12.1439 11.6077 11.3202 8.79583 12.3952 6.56392C12.9234 5.46723 12.777 4.36878 13.8141 3.41179C15.0117 2.30661 15.3381 5.1136 15.3381 5.90925C15.3381 8.09896 11.6936 12.3476 9.66248 13.4501C8.55249 14.0526 7.69486 13.9835 6.35172 13.9835C4.19157 13.9835 4.45985 13.5154 4.45985 11.6073C4.45985 9.21506 7.62002 7.61707 7.77062 5.25458C7.88479 3.46349 8.63945 3.07233 6.35172 3.07233C5.52181 3.07233 2.62303 2.73746 3.04096 3.50878"
                  strokeWidth="5"
                  strokeLinecap="round"
                  style={{ stroke: colors[i] || "black" }}
                />
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