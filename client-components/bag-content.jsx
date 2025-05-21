"use client";

import React, { useEffect, useState } from "react";
import { getProductsFromCart } from "@/utils/db-requests-client";
import { useCart } from "@/providers/cart-provider";
import Spinner from "@/components/spinner";
import Image from "next/image";
import Checkbox from "@/components/checkbox";
import Button from "@/components/button";
import Link from "next/link";
import { getCartId } from "@/utils/get-cart-id";

const BagContent = () => {
  const { cart, removeItem, isCartLoaded } = useCart();
  const [cartDetails, setCartDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const onCheckOut = async () => {
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cart })
    });

    const data = await response.json();
    if (data.url) {
      window.location.href = data.url;
    }
  };

  const getProductLink = (product) => {
    let link = `/collection/${product.slug}`;
    if (product.color) {
      link += `?color=${product.color}`;
      if (product.size) {
        link += `&size=${product.size}`
      }
    } else if (product.size) {
      link += `?size=${product.size}`;
    }

    return link;
  };

  useEffect(() => {
    if (isCartLoaded) {
      if (cart?.length > 0) {
        const fetchCartDetails = async () => {
          const cartDetails = await getProductsFromCart(cart);
          setCartDetails(cartDetails);
          setIsLoading(false);
        };
        fetchCartDetails();
      } else {
        setIsLoading(false);
      }
    }
  }, [cart, isCartLoaded]);

  if (isLoading) {
    return (
      <Spinner />
    );
  }

  if (cart.length === 0) {
    return (
      <div className="flex items-center justify-center w-full px-5 min-h-[calc(100vh_-_80px_-_591px_-_60px)] lg:min-h-[calc(100vh_-_96px_-_198px_-_120px)]">
        <div className="text-3xl text-glow-15 lg:text-5xl lg:text-glow-25 2xl:text-7xl 2xl:text-glow-30">
          Bag is empty
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="lg:hidden flex flex-col px-2.5">
        {cartDetails.map((product, index) => (
          <div key={getCartId(product.id, product.size)} className="w-full flex flex-col">
            <div className="flex items-center justify-between gap-2">
              <Link
                href={getProductLink(product)}
                className="text-[26px] text-glow-10 uppercase !no-underline"
              >
                {product.title}
              </Link>
              <button
                onClick={() => removeItem(getCartId(product.id, product.size))}
                className="cursor-pointer"
              >
                <Image src="/remove.svg" alt="" width={18} height={18} />
              </button>
            </div>
            <div className="grid grid-cols-3">
              <div className="flex flex-col justify-end">
                <div className="text-xl text-glow-10">
                  {product.size && (
                    <>
                      <div>Size: {product.size.toUpperCase()}</div>
                      <br />
                    </>
                  )}
                  <div>Material:</div>
                  <div>{product.material}</div>
                </div>
                <div className="mt-20 text-[26px] text-glow-10">${product.price}</div>
              </div>
              <Link
                href={getProductLink(product)}
                className="col-span-2 relative min-h-80 !no-underline"
              >
                <Image src={product.cover} alt={product.title} fill className="object-contain py-2" />
              </Link>
            </div>
            <div className="relative w-full h-[5px]">
              <Image src={index % 2 === 0 ? "/cart-line-1-mobile.webp" : "/cart-line-2-mobile.webp"} alt="" fill />
            </div>
          </div>
        ))}
        <div className="relative w-full text-[26px] text-glow-10">
          <span>${cartDetails.reduce((prev, current) => prev + current.price, 0)}</span>
          <span className="uppercase absolute left-1/2 -translate-x-1/2">subtotal</span>
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="relative w-full h-[5px]">
            <Image src="/cart-bottom-line-1-mobile.webp" alt="" fill />
          </div>
          <Checkbox checked={termsAccepted} onChange={setTermsAccepted}>
            <div className="w-full flex justify-end text-base text-glow-10">
              <div className="w-[300px] sm:w-full">
                By selecting this box, I agree to the full terms and conditions of purchase and acknowledge that my order.
              </div>
            </div>
          </Checkbox>
          <div className="relative w-full h-[5px]">
            <Image src="/cart-bottom-line-2-mobile.webp" alt="" fill />
          </div>
        </div>
        <Button
          text="Check Out"
          className="mt-5"
          disabled={!termsAccepted}
          onClick={onCheckOut}
        />
      </div>
      <div className="hidden lg:flex flex-col gap-5 px-10">
        {cartDetails.map((product, index) => (
          <div key={getCartId(product.id, product.size)}>
            <div className="grid grid-cols-2 gap-5">
              <div className="relative w-full min-h-56">
                <button
                  className="text-2xl text-glow-15 underline cursor-pointer"
                  onClick={() => removeItem(getCartId(product.id, product.size))}
                >
                  Remove
                </button>
                <Image src={product.cover} alt={product.title} fill className="object-contain pointer-events-none" />
              </div>
              <div className="grid grid-cols-2">
                <div className="text-[54px]">${product.price}</div>
                <div>
                  <Link
                    href={getProductLink(product)}
                    className="text-[54px] uppercase !no-underline"
                  >
                    {product.title}
                  </Link>
                  <div className="mt-10 text-2xl text-glow-15">
                    {product.size && <div>Size: {product.size.toUpperCase()}</div>}
                    <div>Material: {product.material}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full h-2.5 mt-5">
              <Image src={index % 2 === 0 ? "/cart-line-1.webp" : "/cart-line-2.webp"} alt="" fill />
            </div>
          </div>
        ))}
        <div className="text-[54px] uppercase grid grid-cols-2 gap-5">
          <div className="justify-self-end">subtotal:</div>
          <div>${cartDetails.reduce((prev, current) => prev + current.price, 0)}</div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="relative w-full h-2.5">
            <Image src="/cart-bottom-line-1.webp" alt="" fill />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <Checkbox checked={termsAccepted} onChange={setTermsAccepted}>
            <span className="text-2xl text-glow-15">
              By selecting this box, I agree to the full terms and conditions of purchase and acknowledge that my order might be subject to local duties/taxes imposed by the country of destination (if applicable) that are my full responsibility.
            </span>
            </Checkbox>
            <Button
              text="Check Out"
              disabled={!termsAccepted}
              onClick={onCheckOut}
            />
          </div>
          <div className="relative w-full h-2.5">
            <Image src="/cart-bottom-line-2.webp" alt="" fill />
          </div>
        </div>
      </div>
    </>
  );
};

export default BagContent;