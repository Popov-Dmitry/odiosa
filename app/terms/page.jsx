import React from "react";

export async function generateMetadata() {
  return {
    title: "Odiosa – Terms of Use",
    description: "Odiosa – Terms of Use",
    openGraph: {
      title: "Odiosa – Terms of Use",
      url: "https://odiosa.vercel.app/terms"
    }
  };
}

const Terms = () => {
  return (
    <div className="pl-18 pr-5 pb-5 mt-10 flex flex-col gap-20 lg:max-w-[1522px] lg:px-20 lg:mt-20 lg:justify-self-end lg:gap-10">
      <div className="text-[26px] uppercase text-glow-15 self-end lg:text-[54px] lg:text-glow-25 lg:self-start">
        TERMS OF USE
      </div>
      <ol className="list-decimal flex flex-col gap-6 text-xl text-glow-10 lg:text-[44px] lg:text-glow-25 lg:gap-0">
        <li className="pl-5 lg:pl-[23px]">
          <span className="font-bold">Introduction</span> Welcome to ODIOSA, an haute couture avant-garde fashion house.
          By accessing and using our website and services, you agree to abide by the following Terms of Use. If you do
          not agree to these terms, please do not use our services.
        </li>
        <li className="pl-5 lg:pl-[23px]">
          <span className="font-bold">Intellectual Property</span> All content, including but not limited to designs,
          images, text, logos, and graphics, is the exclusive property of ODIOSA. Unauthorized use, reproduction, or
          distribution is strictly prohibited.
        </li>
        <li className="pl-5 lg:pl-[23px]">
          <span className="font-bold">Product Information and Availability</span> Our garments are crafted with the
          highest level of artisanal precision. Due to the nature of our collections, availability is limited, and we
          reserve the right to modify or discontinue products at any time without notice.
        </li>
        <li className="pl-5 lg:pl-[23px]">
          <span className="font-bold">Ordering and Payment</span> All purchases are subject to acceptance and
          availability. We reserve the right to refuse or cancel any order at our discretion. Payment must be completed
          at checkout using the available payment methods.
        </li>
        <li className="pl-5 lg:pl-[23px]">
          <span className="font-bold">Accepted Currencies and Payment Methods</span> We accept payments in euros,
          dollars. Available payment methods include major credit and debit cards (Visa, Mastercard, American Express),
          as well as secure money transfer services (for the information contact info@odiosa.eu). Additional payment
          options may be available based on your location and will be displayed at checkout.
        </li>
        <li className="pl-5 lg:pl-[23px]">
          <span className="font-bold">No Returns on Lingerie</span> Due to hygiene reasons, all sales of lingerie are
          final. No returns, exchanges, or refunds will be accepted for lingerie products.
        </li>
        <li className="pl-5 lg:pl-[23px]">
          <span className="font-bold">Exchange and Return Policy</span> We strive to provide our customers with the
          highest quality garments. However, due to the exclusive and handcrafted nature of our pieces, we accept
          exchanges or returns only under the following conditions:
          <ul className="list-disc pl-5 lg:pl-[23px]">
            <li className="pl-5 lg:pl-[23px]">
              Items must be returned within 14 days of delivery.
            </li>
            <li className="pl-5 lg:pl-[23px]">
              Items must be in their original condition, unworn, unwashed, and with all original tags and packaging.
            </li>
            <li className="pl-5 lg:pl-[23px]">
              Custom-made or made-to-order items are final sale and cannot be returned or exchanged.
            </li>
            <li className="pl-5 lg:pl-[23px]">
              Returns and exchanges are subject to approval after inspection.
            </li>
            <li className="pl-5 lg:pl-[23px]">
              Shipping fees for returns or exchanges are the responsibility of the customer unless the item is deemed
              defective or incorrect.
            </li>
            <li className="pl-5 lg:pl-[23px]">
              To initiate a return or exchange, please contact our customer service at <a href="mailto:Info@odiosa.eu">info@odiosa.eu</a>
            </li>
          </ul>
          Once a return request is approved, you will receive instructions on how to proceed. Refunds, where applicable,
          will be issued to the original payment method within 14 business days of receiving the returned item. We
          reserve the right to refuse any returns that do not comply with our policy.
        </li>
        <li className="pl-5 lg:pl-[23px]">
          <span className="font-bold">Limitation of Liability</span> We strive to provide accurate and high-quality
          services. However, we are not responsible for any indirect, incidental, or consequential damages arising from
          the use of our website or products.
        </li>
        <li className="pl-5 lg:pl-[23px]">
          <span className="font-bold">Governing Law</span> These Terms of Use are governed by the laws of Kyrgyzstan.
          Any disputes will be resolved exclusively in the competent courts of Kyrgyzstan Republic
        </li>
      </ol>
      <div className="lg:mt-10 text-[26px] uppercase text-glow-15 self-end lg:text-[54px] lg:text-glow-25 lg:self-start">
        TERMS OF DELIVERY
      </div>
      <ol className="list-decimal flex flex-col gap-6 text-xl text-glow-10 lg:text-[44px] lg:text-glow-25 lg:gap-0">
        <li className="pl-5 lg:pl-[23px]">
          <span className="font-bold">Shipping Services</span> We use external delivery services such as EMS, DHL, UPS,
          and other premium couriers to ensure the safe and timely arrival of your purchases.
        </li>
        <li className="pl-5 lg:pl-[23px]">
          <span className="font-bold">Delivery Times</span> Delivery times vary depending on the destination and
          courier. Estimated delivery times will be provided at checkout, but we are not responsible for delays caused
          by external carriers or customs processes.
        </li>
        <li className="pl-5 lg:pl-[23px]">
          <span className="font-bold">Shipping Costs and Duties</span> Shipping costs will be calculated at checkout.
          International orders may be subject to customs duties and taxes, which are the responsibility of the
          recipient.
        </li>
        <li className="pl-5 lg:pl-[23px]">
          <span className="font-bold">Order Tracking</span> Once your order is shipped, you will receive a tracking
          number to monitor the delivery status through the courier’s platform.
        </li>
        <li className="pl-5 lg:pl-[23px]">
          <span className="font-bold">Risk of Loss</span> All items are shipped with tracking and insurance. Once the
          courier takes possession of your order, the risk of loss or damage is transferred to the recipient. Please
          ensure that someone is available to receive your order upon delivery.
        </li>
        <li className="pl-5 lg:pl-[23px]">
          <span className="font-bold">Non-Delivery or Damage Claims</span> If your order is not delivered within the
          expected timeframe or arrives damaged, please contact our customer service within 48 hours of receipt to
          initiate an investigation with the courier.
        </li>
        <li className="pl-5 lg:pl-[23px]">
          <span className="font-bold">Address Accuracy</span> Customers are responsible for providing accurate shipping
          information. We are not liable for orders lost due to incorrect address details.
        </li>
        <li className="pl-5 lg:pl-[23px]">
          <span className="font-bold">Modifications to Shipping Terms</span> We reserve the right to modify these
          delivery terms at any time. Updates will be posted on our website.
        </li>
      </ol>
      <div className="text-xl text-glow-10 lg:text-[44px] lg:text-glow-25">
        For further inquiries, please contact our customer service at <a href="mailto:Info@odiosa.eu">info@odiosa.eu</a>
      </div>
    </div>
  );
};

export default Terms;