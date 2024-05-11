"use client";
import "@/app/styles.css";
import Image from "next/image";
import imgcard from "../../../public/img/concentracion/coding mode.jpg";

export default function MusicCard({ dataCard }) {
  console.log(dataCard.data);
  return (
    <div className="contend-card">
      <div className="card">
        <div className="card-img">
          <Image src={imgcard} alt="Peaceful piano" width={100} height={100} />
        </div>
        <h2>{dataCard.data.name}</h2>
        <p>{dataCard.data.artists.items[0].profile.name}</p>
      </div>
    </div>
  );
}
