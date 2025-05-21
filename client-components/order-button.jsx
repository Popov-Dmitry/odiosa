"use client";

import React from "react";
import Button from "@/components/button";
import { useCart } from "@/providers/cart-provider";
import { getCartId } from "@/utils/get-cart-id";

const OrderButton = ({ className, id, size }) => {
  const { addItem, removeItem, isInCart } = useCart();
  const cartId = getCartId(id, size);

  return (
    <Button
      variant="outlined"
      text={isInCart(cartId) ? "REMOVE" : "ORDER"}
      className={className}
      onClick={isInCart(cartId) ? () => removeItem(cartId) : () => addItem(cartId)}
    />
  );
};

export default OrderButton;