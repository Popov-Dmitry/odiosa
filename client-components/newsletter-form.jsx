"use client";

import React, { useState } from "react";
import Input from "@/components/input";
import Button from "@/components/button";
import useResponsive from "@/hooks/use-responsive";

const NewsletterForm = () => {
  const { isMobile } = useResponsive();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: { "Content-Type": "application/json" }
    });

    if (res.ok) {
      setStatus("success");
      setEmail("");
    } else {
      setStatus("error");
      alert("Something went wrong");
    }
  };

  return (
    <div className="pt-10 pl-3 pr-2 min-[550px]:pt-20 lg:px-10 lg:pt-0">
      <div className="text-[26px] uppercase lg:text-2xl lg:normal-case">
        Newsletter
      </div>
      <div className="flex flex-col gap-2.5 mt-10 lg:grid lg:grid-cols-2 lg:gap-4 lg:mt-2.5">
        <Input
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="lg:self-end"
          type="email"
        />
        <Button
          text={status === "loading" ? "Loading" : "Subscribe"}
          variant={isMobile ? "primary" : "secondary"}
          className="lg:!h-20 lg:!text-2xl"
          imageClassName="lg:!h-20"
          disabled={status === "loading"}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default NewsletterForm;