"use client";
import React from "react";
import Image from "next/image";
import ERROR from "../../public/img/error.png";
import { useRouter } from "next/navigation";

export default function GlobalError() {
  const router = useRouter();

  function redirectHome() {
    router.back();
  }

  return (
    <div className="flex flex-col items-center justify-around h-screen">
      <div className="flex justify-center items-center">
        <Image src={ERROR} width={150} height={150} alt="error-image"></Image>
      </div>
      <span className="text-4xl text-center font-bold">
        {" "}
        not found :c{" "}
      </span>

      <button
        className="mt-10 w-fit px-6 py-3 rounded-lg border-2 border-white
        hover:text-black hover:bg-white
        transition-all
        "
        onClick={redirectHome}
        name="redirectButton"
      >
        Come back
      </button>
    </div>
  );
}

