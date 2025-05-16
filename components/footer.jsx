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
    <div className="relative pb-9 lg:grid lg:grid-cols-2 text-shadow-[0_0_1.5px_#000000B2] lg:text-shadow-[0_0_2px_#000000B2] overflow-hidden">
      <div className="absolute top-0 -left-2 right-0 lg:hidden -z-10 overflow-hidden">
        <div className="relative w-[calc(100vw_+_30px)] aspect-[1482/1976]">
          <Image src="/footer-mobile.svg" alt="" fill className="object-cover" />
        </div>
      </div>
      <div className="pt-10 pl-3 pr-2 min-[550px]:pt-20 lg:px-10 lg:pt-0">
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
              <a target="_blank" href="https://www.instagram.com/odiosa.rarespecies/">Instagram</a>
            </div>
          </div>
          {/*<div>*/}
          {/*  <div className="uppercase text-[26px]">Concept Stores</div>*/}
          {/*  <div className="flex flex-col text-xl mt-10">*/}
          {/*    <Link href="/">C-Store</Link>*/}
          {/*    <Link href="/">Store con</Link>*/}
          {/*    <Link href="/">Osa Store</Link>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
        <div className="relative w-full h-4 mt-[18px]">
          <Image src="/fotter-line-2.webp" alt="" fill />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 lg:gap-20 text-2xl">
        <div className="hidden lg:flex lg:flex-col xl:flex-row xl:gap-5">
          <div>Contacts:</div>
          <div className="flex flex-col xl:mt-[28px] lg:ml-10 xl:ml-0">
            <a href="mailto:Info@odiosa.eu">Info@odiosa.eu</a>
            <a target="_blank" href="https://www.instagram.com/odiosa.rarespecies/">Instagram</a>
          </div>
        </div>
        {/*<div className="hidden lg:flex lg:flex-col xl:flex-row xl:gap-5 text-nowrap">*/}
        {/*  <div>Concept Stores:</div>*/}
        {/*  <div className="flex flex-col xl:mt-[28px] lg:ml-[74px] xl:ml-0">*/}
        {/*    <Link href="/">C-Store</Link>*/}
        {/*    <Link href="/">Store con</Link>*/}
        {/*    <Link href="/">Osa Store</Link>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div className="mt-6 pl-4 pr-3 flex justify-between gap-2 w-full text-xl lg:text-2xl lg:flex-col lg:justify-start lg:gap-0">
          <Link href="/privacy-and-cookies">Privacy & Cookies</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;