"use client";

import React from "react";
import Button from "@/components/button";
import { useCart } from "@/providers/cart-provider";

const OrderButton = ({ className, id, size }) => {
  // const onOrder = async () => {
  //   const response = await fetch("/api/checkout", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ itemIds: [id] })
  //   });
  //
  //   const data = await response.json();
  //   if (data.url) {
  //     window.location.href = data.url;
  //   }
  // };
  const { addItem, removeItem, isInCart } = useCart();

  return (
    <Button
      variant="outlined"
      text={isInCart(`${id}-${size}`) ? "REMOVE" : "ORDER"}
      className={className}
      onClick={isInCart(`${id}-${size}`) ? () => removeItem(`${id}-${size}`) : () => addItem(`${id}-${size}`)}
    />
  );
};

export default OrderButton;