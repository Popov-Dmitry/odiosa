"use client";

import React from "react";
import Button from "@/components/button";

const OrderButton = ({ className, id }) => {
  const onOrder = async () => {
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ itemIds: [id] })
    });

    const data = await response.json();
    if (data.url) {
      window.location.href = data.url;
    }
  };

  return (
    <Button
      variant="outlined"
      text="ORDER"
      className={className}
      onClick={onOrder}
    />
  );
};

export default OrderButton;