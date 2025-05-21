import React, { Suspense } from "react";
import CheckoutSuccessContent from "@/client-components/checkout-success-content";
import Spinner from "@/components/spinner";

export async function generateMetadata() {
  return {
    title: "Odiosa – Thank you for your purchase!",
    description: "Odiosa – Thank you for your purchase!",
    openGraph: {
      title: "Odiosa – Thank you for your purchase!",
      url: "https://odiosa.eu/checkout-success"
    }
  };
}

const CheckoutSuccess = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <CheckoutSuccessContent />
    </Suspense>
  )
};

export default CheckoutSuccess;
