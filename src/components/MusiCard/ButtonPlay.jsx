"use client";
import playIcon from "../../../public/img/play.svg";
import Image from "next/image";
import Link from "next/link";

export default function ButtonPlay({ albumID }) {
  // Function to extract id from albumID
  function albumIdExtraction(id) {
    if (id) {
      const string = id;
      const parts = string.split(":");
      return parts[2];
    }
    return null;
  }
  // save id in a variable
  const IdExtraction = albumIdExtraction(albumID);

  return (
    <Link href={`${albumID}`} className="block">
      <div className="w-[50px] h-[50px] bg-green-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
        <Image src={playIcon} alt="icon-play" width={20} height={20} />
      </div>
    </Link>
  );
}
