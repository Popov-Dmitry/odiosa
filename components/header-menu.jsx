"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

const HeaderMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="cursor-pointer absolute top-1/2 right-4 -translate-y-1/2 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image src="/menu.svg" alt="menu" width={30} height={25} />
      </button>
      <div className={clsx(
        "fixed top-16 left-0 w-full py-4 flex flex-col gap-4 text-2xl px-4 text-center bg-[url('/background.png')] bg-repeat bg-[position:0_0] bg-[length:auto_100%] duration-200",
        isOpen && "opacity-100",
        !isOpen && "opacity-0 pointer-events-none"
      )}>
        <Link href="/">Collection</Link>
        <Link href="/">Manifesto</Link>
        <Link href="/">Contacts</Link>
        <Link href="/">Bag</Link>
      </div>
    </>
  );
};

export default HeaderMenu;