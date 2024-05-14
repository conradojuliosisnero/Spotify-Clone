"use client";
import "@/app/styles/styles.css";
import add from "../../../../public/assets/add.svg";
import Image from "next/image";

export default function CreatePlaylist({ funtion }) {
  return (
    <button class="btn-create-list" onClick={funtion}>
      <Image
        className="icon-nav"
        src={add}
        alt="add"
        width={20}
        height={20}
      />
    </button>
  );
}
