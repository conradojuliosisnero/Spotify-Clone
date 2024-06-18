import React from "react";
import Image from "next/image";
import ERROR from "../../public/img/error.png";

export default function GlobalError() {
  return (
    <div className="mx-auto mt-5 flex flex-col justify-between place-content-center">
      <div className="w-full h-full bg-transparent text-white font-bold">
        <Image src={ERROR} width={100} height={100} alt="error-image"></Image>
      </div>
      <span className="text-4xl w-full place-content-center">Track not found :c</span>
    </div>
  );
}
