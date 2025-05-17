import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderMenu from "@/components/header-menu";

const Header = () => {
  return (
    <header className="fixed top-0 z-[9999] py-10 lg:pt-0 lg:pb-24 w-full h-20 flex">
      <Image
        src="/header-mobile.svg"
        alt=""
        fill
        className="w-full object-cover object-bottom sm:object-[0_92%] lg:hidden"
      />
      <Image
        src="/header.svg"
        alt=""
        fill
        className="w-full object-cover object-bottom hidden lg:block"
      />
      <div
        className="absolute inset-0 z-0 opacity-80 mix-blend-multiply pointer-events-none contrast-50 brightness-125 lg:hidden"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='black' opacity='0.6'><filter id='noiseFilter'><feTurbulence type='turbulence' baseFrequency='1.5' numOctaves='2' stitchTiles='stitch'/><feFuncR type='discrete' tableValues='0 1'/><feFuncG type='discrete' tableValues='0 1'/><feFuncB type='discrete' tableValues='0 1'/></filter><rect width='100%' height='100%' filter='url(%23noiseFilter)'/></svg>")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
          maskImage: "linear-gradient(to top, transparent 0%, black 25%, black 100%)",
          WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 25%, black 100%)"
        }}
      />
      <div className="absolute inset-0 z-0 opacity-80 mix-blend-multiply pointer-events-none hidden contrast-50 brightness-125 lg:block"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='black' opacity='0.6'><filter id='noiseFilter'><feTurbulence type='turbulence' baseFrequency='0.65' numOctaves='2' stitchTiles='stitch'/><feFuncR type='discrete' tableValues='0 1'/><feFuncG type='discrete' tableValues='0 1'/><feFuncB type='discrete' tableValues='0 1'/></filter><rect width='100%' height='100%' filter='url(%23noiseFilter)'/></svg>")`,
          backgroundRepeat: "repeat",
          backgroundSize: "120px 120px",
          maskImage: "linear-gradient(to top, transparent 0%, black 25%, black 100%)",
          WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 25%, black 100%)"
        }}
      />
      <div className="flex items-center justify-between w-full lg:px-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:top-1/4 lg:translate-y-0">
        <div className="hidden lg:flex gap-[70px] text-2xl z-10">
          <Link href="/collection">Collection</Link>
          <Link href="/manifesto">Manifesto</Link>
          {/*<Link href="/">Contacts</Link>*/}
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
        <Link href="/bag" className="hidden lg:block ml-auto text-2xl z-10">Bag</Link>
      </div>
      <HeaderMenu />
    </header>
  );
};

export default Header;