import Image from "next/image";
import React from "react";

export default function ArtistCard({ children }) {
  return (
    <div className="gap-4 cursor-pointer flex flex-col items-center justify-center rounded-3xl hover:[background-color:#181818] p-3">
      {children}
    </div>
  );
}
