import React from "react";
import Image from "next/image";
import Input from "@/components/input";
import Button from "@/components/button";
import clsx from "clsx";

const ContactTheManager = ({ className }) => {
  return (
    <div className={clsx(className)}>
      <div className="relative w-full h-4 lg:h-8">
        <Image src="/contact-line-mobile.webp" alt="" fill className="lg:hidden" />
        <Image src="/contact-line-1.webp" alt="" fill className="hidden lg:block" />
      </div>
      <div className="pl-2 pr-[11px] lg:px-8 lg:py-10 lg:flex lg:flex-col lg:items-center">
        <div className="uppercase text-[26px] text-glow-10 lg:text-[54px] lg:text-glow-25">
          Contact the manager
        </div>
        <div className="mt-[60px] text-xl text-glow-10 lg:mt-20 lg:text-[44px] lg:text-glow-25 lg:text-center lg:max-w-[1528px]">
          Each item is handmade to order, tailored to the unique features of your body.
          <br /><br />
          Or you can contact the manager to clarify the details and send the data to him, and we will fit the clothes to you.
        </div>
        <div className="mt-10 flex flex-col gap-5 lg:mt-[165px] lg:gap-8 lg:w-[910px]">
          <Input variant="mobile" placeholder="Name" textCenter inputClassName="lg:text-[44px]" />
          <Input variant="mobile" placeholder="Email" textCenter inputClassName="lg:text-[44px]" />
        </div>
        <Button text="Contact the manager" className="mt-10 lg:hidden" />
        <Button text="submit" className="hidden lg:block mt-10 !w-[910px]" />
      </div>
      <div className="hidden lg:block relative w-full h-8">
        <Image src="/contact-line-2.webp" alt="" fill />
      </div>
    </div>
  );
};

export default ContactTheManager;