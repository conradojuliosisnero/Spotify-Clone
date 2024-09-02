"use client";
import React from "react";
import Image from "next/image";
import ERROR from "../../public/img/error.png";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  function redirectHome() {
    router.back();
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-4">
      <div className="mb-8">
        <Image
          src={ERROR}
          width={200}
          height={200}
          alt="error-image"
          className="animate-pulse"
        />
      </div>
      <h1 className="text-5xl font-bold mb-4 text-center">Page Not Found</h1>
      <p className="text-xl text-gray-400 mb-8 text-center">
        Oops! The track you're looking for seems to have skipped.
      </p>
      <button
        className="px-8 py-3 rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
        onClick={redirectHome}
        name="redirectButton"
      >
        Go Back
      </button>
    </div>
  );
}
