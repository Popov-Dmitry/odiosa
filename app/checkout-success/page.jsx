import React from "react";
import CheckoutSuccessContent from "@/client-components/checkout-success-content";

export async function generateMetadata() {
  return {
    title: "Odiosa – Thank you for your purchase!",
    description: "Odiosa – Thank you for your purchase!",
    openGraph: {
      title: "Odiosa – Thank you for your purchase!",
      url: "https://odiosa.vercel.app/checkout-success"
    }
  };
}

const CheckoutSuccess = () => {
  return <CheckoutSuccessContent />
};

export default CheckoutSuccess;
