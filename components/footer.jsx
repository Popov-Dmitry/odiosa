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
    <div className="relative pb-9">
      <div className="absolute top-0 left-0 right-0 lg:hidden -z-10">
        <div className="relative w-full h-[142px]">
          <Image src="/footer-mobile.png" alt="" fill />
        </div>
      </div>
      <div className="pt-10 pl-3 pr-2">
        <div className="text-[26px] uppercase">
          Newsletter
        </div>
        <Input placeholder="Email" className="mt-10" />
        <Button text="Subscribe" variant={isMobile ? "primary" : "secondary"} className="mt-2.5" />
      </div>
      <div className="mt-[58px] pl-3 pr-2">
        <div className="relative w-full h-4">
          <Image src="/fotter-line-1.png" alt="" fill />
        </div>
        <div className="flex justify-between mt-2.5">
          <div>
            <div className="uppercase text-[26px]">Contacts</div>
            <div className="flex flex-col text-xl mt-10">
              <Link href="/">info@odiosa.ru</Link>
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
          <Image src="/fotter-line-2.png" alt="" fill />
        </div>
      </div>
      <div className="mt-6 pl-4 pr-3 grid grid-cols-3 gap-2 w-full text-xl">
        <Link href="/">Privacy</Link>
        <Link href="/" className="text-center">Cookies</Link>
        <Link href="/" className="text-end">Terms</Link>
      </div>
    </div>
  );
};

export default Footer;