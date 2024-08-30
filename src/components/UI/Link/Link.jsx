"use client";
import Link from "next/link";

export default function LinkComponent({ children, click, href, isActive }) {
  return (
    <Link
      href={href}
      onClick={click}
      className={`flex justify-center items-center w-[60px] h-[30px] text-lg ml-4 p-4 rounded-full transition-all ${
        isActive
          ? "bg-white text-black" // Styles for active link
          : "bg-white text-white bg-opacity-50 hover:bg-white hover:text-black"
      }`}
    >
      {children}
    </Link>
  );
}
