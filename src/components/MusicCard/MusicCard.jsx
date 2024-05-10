"use client";
import "@/app/styles.css";
import Image from "next/image";
import imgcard from "../../../public/img/concentracion/coding mode.jpg";
import { useContext } from "react";
import { TrackContext } from "@/context/tracksContext";

export default function MusicCard({song}) {


  return (
    <div className="contend-card">
      <div className="card">
        <div className="card-img">
          <Image src={imgcard} alt="Peaceful piano" width={100} height={100} />
        </div>
        <h2>Peaceful Piano</h2>
        <p>Relax and indulge with beautiful piano pieces</p>
      </div>
    </div>
  );
}
