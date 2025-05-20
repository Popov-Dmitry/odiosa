"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import useResponsive from "@/hooks/use-responsive";
import { usePathname } from "next/navigation";

const HeaderMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDesktop } = useResponsive();
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  if (isDesktop) {
    return null;
  }

  return (
    <>
      <button
        className="cursor-pointer absolute top-1/2 right-4 -translate-y-1/2 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image src="/menu.webp" alt="menu" width={30} height={25} />
      </button>
      <div className={clsx(
        "fixed top-p left-0 z-[-1] w-full h-full pt-16 pb-4 flex flex-col gap-4 text-2xl px-4 text-center bg-[var(--background)] duration-200",
        isOpen && "opacity-100",
        !isOpen && "opacity-0 pointer-events-none"
      )}>
        <div
          className="absolute inset-0 z-0 opacity-80 mix-blend-multiply pointer-events-none contrast-50 brightness-125 lg:hidden"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='black' opacity='0.6'><filter id='noiseFilter'><feTurbulence type='turbulence' baseFrequency='1.5' numOctaves='2' stitchTiles='stitch'/><feFuncR type='discrete' tableValues='0 1'/><feFuncG type='discrete' tableValues='0 1'/><feFuncB type='discrete' tableValues='0 1'/></filter><rect width='100%' height='100%' filter='url(%23noiseFilter)'/></svg>")`,
            backgroundRepeat: "repeat",
            backgroundSize: "200px 200px"
          }}
        />
        <Link href="/collection">Collection</Link>
        <Link href="/manifesto">Manifesto</Link>
        {/*<Link href="/">Contacts</Link>*/}
        <Link href="/bag">Bag</Link>
      </div>
    </>
  );
};

export default HeaderMenu;