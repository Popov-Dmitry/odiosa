"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Spinner from "@/components/spinner";
import Button from "@/components/button";
import { useCart } from "@/providers/cart-provider";

const CheckoutSuccessContent = () => {
  const searchParams = useSearchParams();
  const { clearCart } = useCart();
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const sessionId = searchParams.get("session_id");
    if (!sessionId) {
      setStatus("error");
      return;
    }

    const verifySession = async () => {
      try {
        const res = await fetch(`/api/verify-session?session_id=${sessionId}`);
        const data = await res.json();

        if (data?.paid) {
          setStatus("ok");
          clearCart();
        } else {
          setStatus("error");
        }
      } catch (error) {
        setStatus("error");
      }
    };

    verifySession();
  }, []);

  if (status === "loading") {
    return <Spinner />;
  }

  if (status === "error") {
    return (
      <div className="flex flex-col justify-center items-center gap-6 px-5 min-h-[calc(100vh_-_80px_-_591px_-_60px)] lg:min-h-[calc(100vh_-_96px_-_198px_-_120px)]">
        <div className="text-6xl">Something went wrong</div>
        <Button href="/bag" text="Return to Bag" />
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center gap-6 px-5 min-h-[calc(100vh_-_80px_-_591px_-_60px)] lg:min-h-[calc(100vh_-_96px_-_198px_-_120px)]">
      <div className="text-6xl">Thank you for your purchase!</div>
      <Button href="/" text="Return to Home" />
    </div>
  );
};

export default CheckoutSuccessContent;