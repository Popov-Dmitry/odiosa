"use client";

import React from "react";
import Button from "@/components/button";
import { useCart } from "@/providers/cart-provider";

const OrderButton = ({ className, id, size }) => {
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