"use client";

import React, { useState } from "react";
import Input from "@/components/input";
import Button from "@/components/button";
import { usePathname, useSearchParams } from "next/navigation";

const ContactTheManagerForm = ({ title }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const getFullUrl = () => {
    const fullPath = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");

    if (typeof window !== "undefined") {
      const origin = window.location.origin;
      return origin + fullPath;
    }

    return fullPath;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) {
      return;
    }
    setStatus("loading");

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ name, email, title, href: getFullUrl() }),
      headers: { "Content-Type": "application/json" }
    });

    if (res.ok) {
      setStatus("success");
      setName("");
      setEmail("");
    } else {
      setStatus("error");
      alert("Something went wrong");
    }
  };

  return (
    <>
      <div className="mt-10 flex flex-col gap-5 lg:mt-[165px] lg:gap-8 lg:w-[910px]">
        <Input
          variant="mobile"
          placeholder="Name"
          textCenter
          inputClassName="lg:text-[44px]"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Input
          variant="mobile"
          placeholder="Email"
          textCenter
          inputClassName="lg:text-[44px]"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <Button
        text="Contact the manager"
        className="mt-10 lg:hidden"
        onClick={handleSubmit}
        disabled={status === "loading"}
      />
      <Button
        text="submit"
        className="hidden lg:block mt-10 !w-[910px]"
        onClick={handleSubmit}
        disabled={status === "loading"}
      />
    </>
  );
};

export default ContactTheManagerForm;