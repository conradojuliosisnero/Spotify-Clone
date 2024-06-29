"use client";
import React from "react";
import Image from "next/image";
import ERROR from "../../public/img/error.png";
import { useRouter } from "next/navigation";

export default function GlobalError() {
  const router = useRouter();

  function redirectHome() {
    router.push("/");
  }

  return (
    <div className="mx-auto mt-5 flex flex-col justify-between place-content-center">
      <div className="w-full h-full bg-transparent text-white font-bold">
        <Image src={ERROR} width={100} height={100} alt="error-image"></Image>
      </div>
      <span className="text-4xl w-full place-content-center">
        {" "}
        not found :c{" "}
      </span>

      <button
        className="text-xl font-semibold p-3 border-2 
        border-white rounded-md mt-5 hover:text-black hover:bg-white
        transition-all
        "
        onClick={redirectHome}
        name="redirectButton"
      >
        Go to Home
      </button>
    </div>
  );
}
