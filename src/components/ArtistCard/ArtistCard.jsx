import Image from "next/image";
import React from "react";

export default function ArtistCard({ children }) {
  return (
    <div className="gap-4 cursor-pointer flex flex-col items-center justify-center rounded-3xl bg-gray-900 hover:bg-gray-800 transition-all p-3">
      {children}
    </div>
  );
}
