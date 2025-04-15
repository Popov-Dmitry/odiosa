"use client";

import React from "react";
import Image from "next/image";
import Input from "@/components/input";
import Button from "@/components/button";
import Link from "next/link";
import useResponsive from "@/hooks/use-responsive";

const Footer = () => {
  const { isMobile } = useResponsive()

  return (
    <div className="relative pb-9 lg:grid lg:grid-cols-2 text-shadow-[0_0_1.5px_#000000B2] lg:text-shadow-[0_0_2px_#000000B2]">
      <div className="absolute top-0 left-0 right-0 lg:hidden -z-10">
        <div className="relative w-full h-[142px]">
          <Image src="/footer-mobile.webp" alt="" fill />
        </div>
      </div>
      <div className="pt-10 pl-3 pr-2 lg:px-10">
        <div className="text-[26px] uppercase lg:text-2xl lg:normal-case">
          Newsletter
        </div>
        <div className="flex flex-col gap-2.5 mt-10 lg:grid lg:grid-cols-2 lg:gap-4 lg:mt-2.5">
          <Input placeholder="Email" className="lg:self-end" />
          <Button
            text="Subscribe"
            variant={isMobile ? "primary" : "secondary"}
            className="lg:!h-20 lg:!text-2xl"
            imageClassName="lg:!h-20"
          />
        </div>
      </div>
      <div className="mt-[58px] pl-3 pr-2 lg:hidden">
        <div className="relative w-full h-4">
          <Image src="/fotter-line-1.webp" alt="" fill />
        </div>
        <div className="flex justify-between mt-2.5">
          <div>
            <div className="uppercase text-[26px]">Contacts</div>
            <div className="flex flex-col text-xl mt-10">
              <a href="mailto:Info@odiosa.eu">Info@odiosa.eu</a>
              <Link href="/">Instagram</Link>
            </div>
          </div>
          <div>
            <div className="uppercase text-[26px]">Concept Stores</div>
            <div className="flex flex-col text-xl mt-10">
              <Link href="/">C-Store</Link>
              <Link href="/">Store con</Link>
              <Link href="/">Osa Store</Link>
            </div>
          </div>
        </div>
        <div className="relative w-full h-4 mt-[18px]">
          <Image src="/fotter-line-2.webp" alt="" fill />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 lg:gap-20 text-2xl">
        <div className="hidden lg:flex lg:flex-col xl:flex-row xl:gap-5">
          <div>Contacts:</div>
          <div className="flex flex-col xl:mt-[28px] lg:ml-10 xl:ml-0">
            <a href="mailto:Info@odiosa.eu">Info@odiosa.eu</a>
            <Link href="/">Instagram</Link>
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-col xl:flex-row xl:gap-5 text-nowrap">
          <div>Concept Stores:</div>
          <div className="flex flex-col xl:mt-[28px] lg:ml-[74px] xl:ml-0">
            <Link href="/">C-Store</Link>
            <Link href="/">Store con</Link>
            <Link href="/">Osa Store</Link>
          </div>
        </div>
        <div className="mt-6 pl-4 pr-3 grid grid-cols-3 gap-2 w-full text-xl lg:text-2xl lg:flex lg:flex-col lg:gap-0">
          <Link href="/">Privacy</Link>
          <Link href="/" className="text-center lg:text-start">Cookies</Link>
          <Link href="/" className="text-end lg:text-start">Terms</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;