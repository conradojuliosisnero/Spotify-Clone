"use client"
import "@/app/styles/styles.css";
import add from "../../../../public/assets/add.svg";
import heart from "../../../../public/assets/heart.svg";
import Image from "next/image";

export default function ExtraOptions() {
  return (
    <div class="extra-options">
      <button class="btn-create-list">
        <Image
          className="icon-nav"
          src={add}
          alt="add"
          width={20}
          height={20}
        ></Image>
        Crear Lista
      </button>
      <button className="btn-favorite-songs">
        <Image
          className="icon-nav"
          src={heart}
          alt="heart"
          width={20}
          height={20}
        ></Image>
        Canciones que te gustan
      </button>
    </div>
  );
}
