"use client";
import Image from "next/image";

export default function RecommendedCard({ name, coverArt }) {
  return (
    <div className="w-[250px] h-[150px] bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl relative overflow-hidden shadow-lg">
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <Image
        src={coverArt || ""}
        alt="cover-art"
        className="absolute -bottom-5 -right-5 w-[170px] h-[170px] object-cover transform rotate-[25deg] shadow-xl"
      />
      <div className="relative z-10 p-4 flex flex-col justify-between h-full">
        <p className="text-4xl font-bold text-white leading-tight">Podcast</p>
      </div>
    </div>
  );
}
