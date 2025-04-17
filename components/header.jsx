import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderMenu from "@/components/header-menu";

const Header = () => {
  return (
    <header className="fixed top-0 z-[9999] py-10 lg:pt-0 lg:pb-24 w-full flex">
      <Image src="/header-mobile.webp" alt="" fill className="w-full lg:hidden" />
      <Image src="/header-desktop.webp" alt="" fill className="w-full hidden lg:block" />
      <div className="flex items-center justify-between w-full lg:px-4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:top-1/4 lg:translate-y-0">
        <div className="hidden lg:flex gap-[70px] text-2xl z-10">
          <Link href="/">Collection</Link>
          <Link href="/">Manifesto</Link>
          <Link href="/">Contacts</Link>
        </div>
        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <Image
            src="/logo.webp"
            alt="odiosa"
            width={72}
            height={21}
            quality={100}
          />
        </Link>
        <Link href="/" className="hidden lg:block ml-auto text-2xl z-10">Bag</Link>
      </div>
      <HeaderMenu />
    </header>
  );
};

export default Header;