"use client";
import playIcon from "../../../public/img/play.svg";
import Image from "next/image";
import Link from "next/link";

export default function ButtonPlay({ isHovered, albumID }) {
  return (
    <div
      className={`button-play w-[48px] h-[48px] flex bg-green-500 rounded-full 
        justify-center items-center absolute bottom-1/3 right-5 hover:scale-110
        ${isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
    >
      <Link href={`/albums/${(`details-album/`, albumID)}`}>
        <Image src={playIcon} alt="icon-play" width={20} height={20} />
      </Link>
    </div>
  );
}
