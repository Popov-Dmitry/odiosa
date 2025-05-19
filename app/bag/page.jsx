import React from "react";
import BagContent from "@/client-components/bag-content";

export async function generateMetadata() {
  return {
    title: "Odiosa – Bag",
    description: "Odiosa – Bag",
    openGraph: {
      title: "Odiosa – Bag",
      url: "https://odiosa.vercel.app/bag"
    }
  };
}

const Bag = () => {
  return <BagContent />;
};

export default Bag;